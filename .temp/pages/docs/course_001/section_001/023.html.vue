<template><div><p>Python provides two levels of access to network services. At a low level, you can access the basic socket support in the underlying operating system, which allows you to implement clients and servers for both connection-oriented and connectionless protocols.</p>
<p>Python also has libraries that provide higher-level access to specific application-level network protocols, such as FTP, HTTP, and so on.</p>
<p>This chapter gives you understanding on most famous concept in Networking - Socket Programming.</p>
<h2 id="what-is-sockets" tabindex="-1"><a class="header-anchor" href="#what-is-sockets"><span>What is Sockets?</span></a></h2>
<p>Sockets are the endpoints of a bidirectional communications channel. Sockets may communicate within a process, between processes on the same machine, or between processes on different continents.</p>
<p>Sockets may be implemented over a number of different channel types: Unix domain sockets, TCP, UDP, and so on. The <em>socket</em> library provides specific classes for handling the common transports as well as a generic interface for handling the rest.</p>
<p>Sockets have their own vocabulary −</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Term &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center"><strong>Domain</strong>The family of protocols that is used as the transport mechanism. These values are constants such as AF_INET, PF_INET, PF_UNIX, PF_X25, and so on.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center"><strong>type</strong>The type of communications between the two endpoints, typically SOCK_STREAM for connection-oriented protocols and SOCK_DGRAM for connectionless protocols.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center"><strong>protocol</strong>Typically zero, this may be used to identify a variant of a protocol within a domain and type.</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center"><strong>hostname</strong>The identifier of a network interface <code v-pre>−A</code> string, which can be a host name, a dotted-quad address, or an IPV6 address in colon (and possibly dot) notationA string <code v-pre>&quot;&lt;broadcast&gt;&quot;</code>, which specifies an INADDR_BROADCAST address.A zero-length string, which specifies INADDR_ANY, orAn Integer, interpreted as a binary address in host byte order.</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center"><strong>port</strong>Each server listens for clients calling on one or more ports. A port may be a Fixnum port number, a string containing a port number, or the name of a service.</td>
</tr>
</tbody>
</table>
<h2 id="the-socket-module" tabindex="-1"><a class="header-anchor" href="#the-socket-module"><span>The <em>socket</em> Module</span></a></h2>
<p>To create a socket, you must use the <em>socket.socket()</em> function available in <em>socket</em> module, which has the general syntax −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>s = socket.socket (socket_family, socket_type, protocol=0)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here is the description of the parameters −</p>
<ul>
<li><strong>socket_family</strong> − This is either AF_UNIX or AF_INET, as explained earlier.</li>
<li><strong>socket_type</strong> − This is either SOCK_STREAM or SOCK_DGRAM.</li>
<li><strong>protocol</strong> − This is usually left out, defaulting to 0.</li>
</ul>
<p>Once you have <em>socket</em> object, then you can use required functions to create your client or server program. Following is the list of functions required −</p>
<h2 id="server-socket-methods" tabindex="-1"><a class="header-anchor" href="#server-socket-methods"><span>Server Socket Methods</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Method &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**s.bind()**This method binds address (hostname, port number pair) to socket.</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**s.listen()**This method sets up and start TCP listener.</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**s.accept()**This passively accept TCP client connection, waiting until connection arrives (blocking).</td>
</tr>
</tbody>
</table>
<h2 id="client-socket-methods" tabindex="-1"><a class="header-anchor" href="#client-socket-methods"><span>Client Socket Methods</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Method &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**s.connect()**This method actively initiates TCP server connection.</td>
</tr>
</tbody>
</table>
<h2 id="general-socket-methods" tabindex="-1"><a class="header-anchor" href="#general-socket-methods"><span>General Socket Methods</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Sr.No.</th>
<th style="text-align:center">Method &amp; Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">**s.recv()**This method receives TCP message</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">**s.send()**This method transmits TCP message</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">**s.recvfrom()**This method receives UDP message</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">**s.sendto()**This method transmits UDP message</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">**s.close()**This method closes socket</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">**socket.gethostname()**Returns the hostname.</td>
</tr>
</tbody>
</table>
<h2 id="a-simple-server" tabindex="-1"><a class="header-anchor" href="#a-simple-server"><span>A Simple Server</span></a></h2>
<p>To write Internet servers, we use the <strong>socket</strong> function available in socket module to create a socket object. A socket object is then used to call other functions to setup a socket server.</p>
<p>Now call <strong>bind(hostname, port)</strong> function to specify a <em>port</em> for your service on the given host.</p>
<p>Next, call the <em>accept</em> method of the returned object. This method waits until a client connects to the port you specified, and then returns a <em>connection</em> object that represents the connection to that client.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python           # This is server.py file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import socket               # Import socket module</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s = socket.socket()         # Create a socket object</span></span>
<span class="line"><span>host = socket.gethostname() # Get local machine name</span></span>
<span class="line"><span>port = 12345                # Reserve a port for your service.</span></span>
<span class="line"><span>s.bind((host, port))        # Bind to the port</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s.listen(5)                 # Now wait for client connection.</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>   c, addr = s.accept()     # Establish connection with client.</span></span>
<span class="line"><span>   print 'Got connection from', addr</span></span>
<span class="line"><span>   c.send('Thank you for connecting')</span></span>
<span class="line"><span>   c.close()                # Close the connection</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="a-simple-client" tabindex="-1"><a class="header-anchor" href="#a-simple-client"><span>A Simple Client</span></a></h2>
<p>Let us write a very simple client program which opens a connection to a given port 12345 and given host. This is very simple to create a socket client using Python's <em>socket</em> module function.</p>
<p>The <strong>socket.connect(hosname, port )</strong> opens a TCP connection to <em>hostname</em> on the <em>port</em>. Once you have a socket open, you can read from it like any IO object. When done, remember to close it, as you would close a file.</p>
<p>The following code is a very simple client that connects to a given host and port, reads any available data from the socket, and then exits −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python           # This is client.py file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import socket               # Import socket module</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s = socket.socket()         # Create a socket object</span></span>
<span class="line"><span>host = socket.gethostname() # Get local machine name</span></span>
<span class="line"><span>port = 12345                # Reserve a port for your service.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s.connect((host, port))</span></span>
<span class="line"><span>print s.recv(1024)</span></span>
<span class="line"><span>s.close()                     # Close the socket when done</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now run this server.py in background and then run above client.py to see the result.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># Following would start a server in background.</span></span>
<span class="line"><span>$ python server.py &#x26; </span></span>
<span class="line"><span></span></span>
<span class="line"><span># Once server is started run client as follows:</span></span>
<span class="line"><span>$ python client.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This would produce following result −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Got connection from ('127.0.0.1', 48437)</span></span>
<span class="line"><span>Thank you for connecting</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-internet-modules" tabindex="-1"><a class="header-anchor" href="#python-internet-modules"><span>Python Internet modules</span></a></h2>
<p>A list of some important modules in Python Network/Internet programming.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Protocol</th>
<th style="text-align:center">Common function</th>
<th style="text-align:center">Port No</th>
<th>Python module</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">HTTP</td>
<td style="text-align:center">Web pages</td>
<td style="text-align:center">80</td>
<td>httplib, urllib, xmlrpclib</td>
</tr>
<tr>
<td style="text-align:center">NNTP</td>
<td style="text-align:center">Usenet news</td>
<td style="text-align:center">119</td>
<td>nntplib</td>
</tr>
<tr>
<td style="text-align:center">FTP</td>
<td style="text-align:center">File transfers</td>
<td style="text-align:center">20</td>
<td>ftplib, urllib</td>
</tr>
<tr>
<td style="text-align:center">SMTP</td>
<td style="text-align:center">Sending email</td>
<td style="text-align:center">25</td>
<td>smtplib</td>
</tr>
<tr>
<td style="text-align:center">POP3</td>
<td style="text-align:center">Fetching email</td>
<td style="text-align:center">110</td>
<td>poplib</td>
</tr>
<tr>
<td style="text-align:center">IMAP4</td>
<td style="text-align:center">Fetching email</td>
<td style="text-align:center">143</td>
<td>imaplib</td>
</tr>
<tr>
<td style="text-align:center">Telnet</td>
<td style="text-align:center">Command lines</td>
<td style="text-align:center">23</td>
<td>telnetlib</td>
</tr>
<tr>
<td style="text-align:center">Gopher</td>
<td style="text-align:center">Document transfers</td>
<td style="text-align:center">70</td>
<td>gopherlib, urllib</td>
</tr>
</tbody>
</table>
<p>Please check all the libraries mentioned above to work with FTP, SMTP, POP, and IMAP protocols.</p>
<h2 id="further-readings" tabindex="-1"><a class="header-anchor" href="#further-readings"><span>Further Readings</span></a></h2>
<p>This was a quick start with Socket Programming. It is a vast subject. It is recommended to go through the following link to find more detail −</p>
<ul>
<li><a href="https://www.tutorialspoint.com/unix_sockets/index.htm" target="_blank" rel="noopener noreferrer">Unix Socket Programming</a>.</li>
<li><a href="http://docs.python.org/3.0/library/socket.html" target="_blank" rel="noopener noreferrer">Python Socket Library and Modules</a>.</li>
</ul>
</div></template>


