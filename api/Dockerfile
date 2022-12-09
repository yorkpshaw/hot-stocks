FROM python:3.10-bullseye
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
CMD python -m migrations up && uvicorn main:app --reload --host 0.0.0.0 --port $PORT
