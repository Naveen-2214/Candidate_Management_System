from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models, schemas
from database import Base, engine, get_db

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Candidate Management System API")

# ---- CORS Configuration ----
origins = [
    "http://localhost:5173",  # Vite frontend
    "http://127.0.0.1:5173"   # optional
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,    # use ["*"] for dev only
    allow_credentials=True,
    allow_methods=["*"],      # allow GET, POST, PUT, DELETE
    allow_headers=["*"],      # allow Content-Type and other headers
)
# ----------------------------

# ---- CRUD Endpoints ----

# READ all candidates
@app.get("/api/candidates", response_model=list[schemas.Candidate])
def read_candidates(db: Session = Depends(get_db)):
    return db.query(models.Candidate).all()

# CREATE a new candidate
@app.post("/api/candidates", response_model=schemas.Candidate)
def create_candidate(candidate: schemas.CandidateCreate, db: Session = Depends(get_db)):
    db_candidate = models.Candidate(**candidate.dict())
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    return db_candidate

# UPDATE a candidate
@app.put("/api/candidates/{candidate_id}", response_model=schemas.Candidate)
def update_candidate(candidate_id: int, candidate: schemas.CandidateUpdate, db: Session = Depends(get_db)):
    db_candidate = db.query(models.Candidate).filter(models.Candidate.id == candidate_id).first()
    if not db_candidate:
        raise HTTPException(status_code=404, detail="Candidate not found")
    for key, value in candidate.dict().items():
        setattr(db_candidate, key, value)
    db.commit()
    db.refresh(db_candidate)
    return db_candidate

# DELETE a candidate
@app.delete("/api/candidates/{candidate_id}")
def delete_candidate(candidate_id: int, db: Session = Depends(get_db)):
    db_candidate = db.query(models.Candidate).filter(models.Candidate.id == candidate_id).first()
    if not db_candidate:
        raise HTTPException(status_code=404, detail="Candidate not found")
    db.delete(db_candidate)
    db.commit()
    return {"message": "Candidate deleted"}
