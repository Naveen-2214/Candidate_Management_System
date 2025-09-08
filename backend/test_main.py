from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_create_candidate():
    data = {
        "name": "Test User",
        "email": "test@example.com",
        "phone_number": "1234567890",
        "current_status": "Applied",
        "resume_link": "http://example.com/resume.pdf"
    }
    response = client.post("/api/candidates", json=data)
    assert response.status_code in [200, 201]
    res_json = response.json()
    assert res_json["name"] == "Test User"

def test_get_candidates():
    response = client.get("/api/candidates")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
