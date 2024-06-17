from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.after_request
def add_headers(resp):
    resp.headers["X-Content-Type-Options"] = "nosniff"
    resp.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    resp.headers["Content-Security-Policy"] = (
        "script-src 'self' https://cdn.jsdelivr.net; style-src 'self' https://fonts.googleapis.com/ https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com/; default-src 'none'"
    )
    return resp


if __name__ == "__main__":
    app.run(debug=True)
