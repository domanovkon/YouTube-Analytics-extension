# -*- coding: utf-8 -*-
from http.server import HTTPServer, CGIHTTPRequestHandler
server_address = ("", 8000)
httpd = HTTPServer(server_address, CGIHTTPRequestHandler)
httpd.serve_forever()
class Handler(SimpleHTTPRequestHandler):
    def send_response(self, *args, **kwargs):
        SimpleHTTPRequestHandler.send_response(self, *args, **kwargs)
        self.send_header('Access-Control-Allow-Origin', '*')
