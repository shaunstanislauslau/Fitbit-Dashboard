# Install the Python Requests library:
# `pip install requests`
import plotly
import plotly.graph_objs as go
import plotly.plotly as py
import requests
import json


def send_request():
    # Request
    # GET https://api.fitbit.com/1/user/-/activities/heart/date/2019-06-08/1d/1sec/time/00:00/23:59.json

    try:
        response = requests.get(
            url="https://api.fitbit.com/1/user/-/activities/heart/date/2019-06-08/1d/1sec/time/00:00/23:59.json",
            headers={
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRMMjIiLCJzdWIiOiIzNzlaOEsiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdzZXQgd2FjdCB3bG9jIiwiZXhwIjoxNTYyNjYyNjI0LCJpYXQiOjE1NjIxMTcwNjl9.p1r7AI6aEvI-5iTYe364Xl3jnxi1KzxazbZz1ClMPic",
            },
        )
        status_code = response.status_code
        data = response.content
        return status_code, data
    except requests.exceptions.RequestException:
        print('HTTP Request failed')


status_code, data = send_request()
data = json.loads(data)
heart_rate_intraday = data['activities-heart-intraday']['dataset']

t = []
heartRate = []
for item in heart_rate_intraday:
    t.append(item['time'])
    heartRate.append(item['value'])


# Create a trace
trace = go.Scatter(
    x=t,
    y=heartRate,
    mode='lines',
)

data = [trace]

# plotly.offline.plot(data, filename='basic-line')
plotly.offline.plot(data, filename='scatter-mode')
