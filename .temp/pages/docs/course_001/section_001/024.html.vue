<template><div><p>Simple Mail Transfer Protocol (SMTP) is a protocol, which handles sending e-mail and routing e-mail between mail servers.</p>
<p>Python provides <strong>smtplib</strong> module, which defines an SMTP client session object that can be used to send mail to any Internet machine with an SMTP or ESMTP listener daemon.</p>
<p>Here is a simple syntax to create one SMTP object, which can later be used to send an e-mail −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import smtplib</span></span>
<span class="line"><span></span></span>
<span class="line"><span>smtpObj = smtplib.SMTP( [host [, port [, local_hostname]]] )</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is the detail of the parameters −</p>
<ul>
<li><strong>host</strong> − This is the host running your SMTP server. You can specify IP address of the host or a domain name like tutorialspoint.com. This is optional argument.</li>
<li><strong>port</strong> − If you are providing <em>host</em> argument, then you need to specify a port, where SMTP server is listening. Usually this port would be 25.</li>
<li><strong>local_hostname</strong> − If your SMTP server is running on your local machine, then you can specify just <em>localhost</em> as of this option.</li>
</ul>
<p>An SMTP object has an instance method called <strong>sendmail</strong>, which is typically used to do the work of mailing a message. It takes three parameters −</p>
<ul>
<li>The <em>sender</em> − A string with the address of the sender.</li>
<li>The <em>receivers</em> − A list of strings, one for each recipient.</li>
<li>The <em>message</em> − A message as a string formatted as specified in the various RFCs.</li>
</ul>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2>
<p>Here is a simple way to send one e-mail using Python script. Try it once −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import smtplib</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sender = 'from@fromdomain.com'</span></span>
<span class="line"><span>receivers = ['to@todomain.com']</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message = """From: From Person &#x3C;from@fromdomain.com></span></span>
<span class="line"><span>To: To Person &#x3C;to@todomain.com></span></span>
<span class="line"><span>Subject: SMTP e-mail test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is a test e-mail message.</span></span>
<span class="line"><span>"""</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   smtpObj = smtplib.SMTP('localhost')</span></span>
<span class="line"><span>   smtpObj.sendmail(sender, receivers, message)         </span></span>
<span class="line"><span>   print "Successfully sent email"</span></span>
<span class="line"><span>except SMTPException:</span></span>
<span class="line"><span>   print "Error: unable to send email"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, you have placed a basic e-mail in message, using a triple quote, taking care to format the headers correctly. An e-mail requires a <strong>From</strong>, <strong>To</strong>, and <strong>Subject</strong> header, separated from the body of the e-mail with a blank line.</p>
<p>To send the mail you use <em>smtpObj</em> to connect to the SMTP server on the local machine and then use the <em>sendmail</em> method along with the message, the from address, and the destination address as parameters (even though the from and to addresses are within the e-mail itself, these aren't always used to route mail).</p>
<p>If you are not running an SMTP server on your local machine, you can use <em>smtplib</em> client to communicate with a remote SMTP server. Unless you are using a webmail service (such as Hotmail or Yahoo! Mail), your e-mail provider must have provided you with outgoing mail server details that you can supply them, as follows −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>smtplib.SMTP('mail.your-domain.com', 25)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="sending-an-html-e-mail-using-python" tabindex="-1"><a class="header-anchor" href="#sending-an-html-e-mail-using-python"><span>Sending an HTML e-mail using Python</span></a></h2>
<p>When you send a text message using Python, then all the content are treated as simple text. Even if you include HTML tags in a text message, it is displayed as simple text and HTML tags will not be formatted according to HTML syntax. But Python provides option to send an HTML message as actual HTML message.</p>
<p>While sending an e-mail message, you can specify a Mime version, content type and character set to send an HTML e-mail.</p>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p>Following is the example to send HTML content as an e-mail. Try it once −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import smtplib</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message = """From: From Person &#x3C;from@fromdomain.com></span></span>
<span class="line"><span>To: To Person &#x3C;to@todomain.com></span></span>
<span class="line"><span>MIME-Version: 1.0</span></span>
<span class="line"><span>Content-type: text/html</span></span>
<span class="line"><span>Subject: SMTP HTML e-mail test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is an e-mail message to be sent in HTML format</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;b>This is HTML message.&#x3C;/b></span></span>
<span class="line"><span>&#x3C;h1>This is headline.&#x3C;/h1></span></span>
<span class="line"><span>"""</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   smtpObj = smtplib.SMTP('localhost')</span></span>
<span class="line"><span>   smtpObj.sendmail(sender, receivers, message)         </span></span>
<span class="line"><span>   print "Successfully sent email"</span></span>
<span class="line"><span>except SMTPException:</span></span>
<span class="line"><span>   print "Error: unable to send email"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sending-attachments-as-an-e-mail" tabindex="-1"><a class="header-anchor" href="#sending-attachments-as-an-e-mail"><span>Sending Attachments as an E-mail</span></a></h2>
<p>To send an e-mail with mixed content requires to set <strong>Content-type</strong> header to <strong>multipart/mixed</strong>. Then, text and attachment sections can be specified within <strong>boundaries</strong>.</p>
<p>A boundary is started with two hyphens followed by a unique number, which cannot appear in the message part of the e-mail. A final boundary denoting the e-mail's final section must also end with two hyphens.</p>
<p>Attached files should be encoded with the <strong>pack(&quot;m&quot;)</strong> function to have base64 encoding before transmission.</p>
<h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h3>
<p>Following is the example, which sends a file <strong>/tmp/test.txt</strong> as an attachment. Try it once −</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import smtplib</span></span>
<span class="line"><span>import base64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filename = "/tmp/test.txt"</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Read a file and encode it into base64 format</span></span>
<span class="line"><span>fo = open(filename, "rb")</span></span>
<span class="line"><span>filecontent = fo.read()</span></span>
<span class="line"><span>encodedcontent = base64.b64encode(filecontent)  # base64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sender = 'webmaster@tutorialpoint.com'</span></span>
<span class="line"><span>reciever = 'amrood.admin@gmail.com'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>marker = "AUNIQUEMARKER"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body ="""</span></span>
<span class="line"><span>This is a test email to send an attachement.</span></span>
<span class="line"><span>"""</span></span>
<span class="line"><span># Define the main headers.</span></span>
<span class="line"><span>part1 = """From: From Person &#x3C;me@fromdomain.net></span></span>
<span class="line"><span>To: To Person &#x3C;amrood.admin@gmail.com></span></span>
<span class="line"><span>Subject: Sending Attachement</span></span>
<span class="line"><span>MIME-Version: 1.0</span></span>
<span class="line"><span>Content-Type: multipart/mixed; boundary=%s</span></span>
<span class="line"><span>--%s</span></span>
<span class="line"><span>""" % (marker, marker)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Define the message action</span></span>
<span class="line"><span>part2 = """Content-Type: text/plain</span></span>
<span class="line"><span>Content-Transfer-Encoding:8bit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%s</span></span>
<span class="line"><span>--%s</span></span>
<span class="line"><span>""" % (body,marker)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Define the attachment section</span></span>
<span class="line"><span>part3 = """Content-Type: multipart/mixed; name=\"%s\"</span></span>
<span class="line"><span>Content-Transfer-Encoding:base64</span></span>
<span class="line"><span>Content-Disposition: attachment; filename=%s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%s</span></span>
<span class="line"><span>--%s--</span></span>
<span class="line"><span>""" %(filename, filename, encodedcontent, marker)</span></span>
<span class="line"><span>message = part1 + part2 + part3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   smtpObj = smtplib.SMTP('localhost')</span></span>
<span class="line"><span>   smtpObj.sendmail(sender, reciever, message)</span></span>
<span class="line"><span>   print "Successfully sent email"</span></span>
<span class="line"><span>except Exception:</span></span>
<span class="line"><span>   print "Error: unable to send email"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


