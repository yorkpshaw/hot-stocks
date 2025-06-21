FROM python:3.11-bookworm
RUN python -m pip install --upgrade pip
WORKDIR /app

# Top-level files
COPY requirements.txt requirements.txt
COPY main.py main.py

# All of the directories that contain application code
COPY queries queries
COPY routers routers
COPY tests tests
COPY migrations migrations

RUN pip install -r requirements.txt
CMD bash -c "until python -m migrations up; do echo 'Waiting for DB...'; sleep 10; done; uvicorn main:app --reload --host 0.0.0.0 --port $PORT"
