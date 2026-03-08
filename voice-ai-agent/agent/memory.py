import redis

r = redis.Redis(host="localhost", port=6379, decode_responses=True)

def set_session(session_id: str, data: str):
    r.set(session_id, data, ex=600)  # expires in 10 minutes

def get_session(session_id: str):
    return r.get(session_id)

def set_patient(patient_id: str, data: str):
    r.set(f"patient:{patient_id}", data)

def get_patient(patient_id: str):
    return r.get(f"patient:{patient_id}")
