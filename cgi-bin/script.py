#!/usr/bin/python
# -*- coding: utf-8  -*-
import cgi
import sys
import codecs

storage = cgi.FieldStorage()
data = storage.getvalue('data')
print('Status: 200 OK')
print('Content-Type: text/html')
print('')
f = open("text_file1.txt", "a")
f.write(data)
f.close()
#data = data.getvalue().encode('utf-8')
sys.stdout.buffer.write(data.encode())
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
#if data is not None:
#    print(data)
