from pydantic import BaseModel
from typing import Optional

class CandidateBase(BaseModel):
    name: str
    email: str
    phone_number: str
    current_status: str
    resume_link: Optional[str] = None

class CandidateCreate(CandidateBase):
    pass

class CandidateUpdate(CandidateBase):
    pass

class Candidate(CandidateBase):
    id: int

    class Config:
        from_attributes = True
