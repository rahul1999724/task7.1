#!/usr/bin/python3
import cgi
import subprocess

print("content-type: text/html")
print()

cmd = 'sudo docker images'

op = subprocess.getoutput(cmd)
print("""<pre><b>""")
print(op)
print("""</b></pre>""")
