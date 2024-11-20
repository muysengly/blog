import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as i}from"./app-D5yedoel.js";const l={};function t(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>Simple Mail Transfer Protocol (SMTP) is a protocol, which handles sending e-mail and routing e-mail between mail servers.</p><p>Python provides <strong>smtplib</strong> module, which defines an SMTP client session object that can be used to send mail to any Internet machine with an SMTP or ESMTP listener daemon.</p><p>Here is a simple syntax to create one SMTP object, which can later be used to send an e-mail −</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import smtplib</span></span>
<span class="line"><span></span></span>
<span class="line"><span>smtpObj = smtplib.SMTP( [host [, port [, local_hostname]]] )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is the detail of the parameters −</p><ul><li><strong>host</strong> − This is the host running your SMTP server. You can specify IP address of the host or a domain name like tutorialspoint.com. This is optional argument.</li><li><strong>port</strong> − If you are providing <em>host</em> argument, then you need to specify a port, where SMTP server is listening. Usually this port would be 25.</li><li><strong>local_hostname</strong> − If your SMTP server is running on your local machine, then you can specify just <em>localhost</em> as of this option.</li></ul><p>An SMTP object has an instance method called <strong>sendmail</strong>, which is typically used to do the work of mailing a message. It takes three parameters −</p><ul><li>The <em>sender</em> − A string with the address of the sender.</li><li>The <em>receivers</em> − A list of strings, one for each recipient.</li><li>The <em>message</em> − A message as a string formatted as specified in the various RFCs.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Here is a simple way to send one e-mail using Python script. Try it once −</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import smtplib</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sender = &#39;from@fromdomain.com&#39;</span></span>
<span class="line"><span>receivers = [&#39;to@todomain.com&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message = &quot;&quot;&quot;From: From Person &lt;from@fromdomain.com&gt;</span></span>
<span class="line"><span>To: To Person &lt;to@todomain.com&gt;</span></span>
<span class="line"><span>Subject: SMTP e-mail test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is a test e-mail message.</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   smtpObj = smtplib.SMTP(&#39;localhost&#39;)</span></span>
<span class="line"><span>   smtpObj.sendmail(sender, receivers, message)         </span></span>
<span class="line"><span>   print &quot;Successfully sent email&quot;</span></span>
<span class="line"><span>except SMTPException:</span></span>
<span class="line"><span>   print &quot;Error: unable to send email&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, you have placed a basic e-mail in message, using a triple quote, taking care to format the headers correctly. An e-mail requires a <strong>From</strong>, <strong>To</strong>, and <strong>Subject</strong> header, separated from the body of the e-mail with a blank line.</p><p>To send the mail you use <em>smtpObj</em> to connect to the SMTP server on the local machine and then use the <em>sendmail</em> method along with the message, the from address, and the destination address as parameters (even though the from and to addresses are within the e-mail itself, these aren&#39;t always used to route mail).</p><p>If you are not running an SMTP server on your local machine, you can use <em>smtplib</em> client to communicate with a remote SMTP server. Unless you are using a webmail service (such as Hotmail or Yahoo! Mail), your e-mail provider must have provided you with outgoing mail server details that you can supply them, as follows −</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>smtplib.SMTP(&#39;mail.your-domain.com&#39;, 25)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="sending-an-html-e-mail-using-python" tabindex="-1"><a class="header-anchor" href="#sending-an-html-e-mail-using-python"><span>Sending an HTML e-mail using Python</span></a></h2><p>When you send a text message using Python, then all the content are treated as simple text. Even if you include HTML tags in a text message, it is displayed as simple text and HTML tags will not be formatted according to HTML syntax. But Python provides option to send an HTML message as actual HTML message.</p><p>While sending an e-mail message, you can specify a Mime version, content type and character set to send an HTML e-mail.</p><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3><p>Following is the example to send HTML content as an e-mail. Try it once −</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import smtplib</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message = &quot;&quot;&quot;From: From Person &lt;from@fromdomain.com&gt;</span></span>
<span class="line"><span>To: To Person &lt;to@todomain.com&gt;</span></span>
<span class="line"><span>MIME-Version: 1.0</span></span>
<span class="line"><span>Content-type: text/html</span></span>
<span class="line"><span>Subject: SMTP HTML e-mail test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is an e-mail message to be sent in HTML format</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;b&gt;This is HTML message.&lt;/b&gt;</span></span>
<span class="line"><span>&lt;h1&gt;This is headline.&lt;/h1&gt;</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   smtpObj = smtplib.SMTP(&#39;localhost&#39;)</span></span>
<span class="line"><span>   smtpObj.sendmail(sender, receivers, message)         </span></span>
<span class="line"><span>   print &quot;Successfully sent email&quot;</span></span>
<span class="line"><span>except SMTPException:</span></span>
<span class="line"><span>   print &quot;Error: unable to send email&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sending-attachments-as-an-e-mail" tabindex="-1"><a class="header-anchor" href="#sending-attachments-as-an-e-mail"><span>Sending Attachments as an E-mail</span></a></h2><p>To send an e-mail with mixed content requires to set <strong>Content-type</strong> header to <strong>multipart/mixed</strong>. Then, text and attachment sections can be specified within <strong>boundaries</strong>.</p><p>A boundary is started with two hyphens followed by a unique number, which cannot appear in the message part of the e-mail. A final boundary denoting the e-mail&#39;s final section must also end with two hyphens.</p><p>Attached files should be encoded with the <strong>pack(&quot;m&quot;)</strong> function to have base64 encoding before transmission.</p><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h3><p>Following is the example, which sends a file <strong>/tmp/test.txt</strong> as an attachment. Try it once −</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import smtplib</span></span>
<span class="line"><span>import base64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filename = &quot;/tmp/test.txt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Read a file and encode it into base64 format</span></span>
<span class="line"><span>fo = open(filename, &quot;rb&quot;)</span></span>
<span class="line"><span>filecontent = fo.read()</span></span>
<span class="line"><span>encodedcontent = base64.b64encode(filecontent)  # base64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sender = &#39;webmaster@tutorialpoint.com&#39;</span></span>
<span class="line"><span>reciever = &#39;amrood.admin@gmail.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>marker = &quot;AUNIQUEMARKER&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body =&quot;&quot;&quot;</span></span>
<span class="line"><span>This is a test email to send an attachement.</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span># Define the main headers.</span></span>
<span class="line"><span>part1 = &quot;&quot;&quot;From: From Person &lt;me@fromdomain.net&gt;</span></span>
<span class="line"><span>To: To Person &lt;amrood.admin@gmail.com&gt;</span></span>
<span class="line"><span>Subject: Sending Attachement</span></span>
<span class="line"><span>MIME-Version: 1.0</span></span>
<span class="line"><span>Content-Type: multipart/mixed; boundary=%s</span></span>
<span class="line"><span>--%s</span></span>
<span class="line"><span>&quot;&quot;&quot; % (marker, marker)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Define the message action</span></span>
<span class="line"><span>part2 = &quot;&quot;&quot;Content-Type: text/plain</span></span>
<span class="line"><span>Content-Transfer-Encoding:8bit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%s</span></span>
<span class="line"><span>--%s</span></span>
<span class="line"><span>&quot;&quot;&quot; % (body,marker)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Define the attachment section</span></span>
<span class="line"><span>part3 = &quot;&quot;&quot;Content-Type: multipart/mixed; name=\\&quot;%s\\&quot;</span></span>
<span class="line"><span>Content-Transfer-Encoding:base64</span></span>
<span class="line"><span>Content-Disposition: attachment; filename=%s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%s</span></span>
<span class="line"><span>--%s--</span></span>
<span class="line"><span>&quot;&quot;&quot; %(filename, filename, encodedcontent, marker)</span></span>
<span class="line"><span>message = part1 + part2 + part3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>   smtpObj = smtplib.SMTP(&#39;localhost&#39;)</span></span>
<span class="line"><span>   smtpObj.sendmail(sender, reciever, message)</span></span>
<span class="line"><span>   print &quot;Successfully sent email&quot;</span></span>
<span class="line"><span>except Exception:</span></span>
<span class="line"><span>   print &quot;Error: unable to send email&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28)]))}const d=s(l,[["render",t],["__file","024.html.vue"]]),c=JSON.parse('{"path":"/docs/course_001/024.html","title":"24. Sending Email","lang":"en-US","frontmatter":{"title":"24. Sending Email","description":"Simple Mail...","lead":"","date":"2022-01-25T13:41:39.000Z","lastmod":"2022-01-25T13:41:39.000Z","draft":false,"images":[],"type":"docs","toc":true,"weight":24,"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/course_001/024.html"}],["meta",{"property":"og:site_name","content":"My Website"}],["meta",{"property":"og:title","content":"24. Sending Email"}],["meta",{"property":"og:description","content":"Simple Mail..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-01-25T13:41:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"24. Sending Email\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-25T13:41:39.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sengly MUY\\"}]}"]]},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Sending an HTML e-mail using Python","slug":"sending-an-html-e-mail-using-python","link":"#sending-an-html-e-mail-using-python","children":[{"level":3,"title":"Example","slug":"example-1","link":"#example-1","children":[]}]},{"level":2,"title":"Sending Attachments as an E-mail","slug":"sending-attachments-as-an-e-mail","link":"#sending-attachments-as-an-e-mail","children":[{"level":3,"title":"Example","slug":"example-2","link":"#example-2","children":[]}]}],"git":{},"readingTime":{"minutes":2.95,"words":884},"filePathRelative":"docs/course_001/024.md","localizedDate":"January 25, 2022","excerpt":"<p>Simple Mail Transfer Protocol (SMTP) is a protocol, which handles sending e-mail and routing e-mail between mail servers.</p>\\n<p>Python provides <strong>smtplib</strong> module, which defines an SMTP client session object that can be used to send mail to any Internet machine with an SMTP or ESMTP listener daemon.</p>"}');export{d as comp,c as data};
