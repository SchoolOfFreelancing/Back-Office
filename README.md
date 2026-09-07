# Website Content Export

This document contains a structured text export of the website contents from `/var/www/html/`.
It is designed to make the website content fully searchable via GitHub, GitLab, and other AI integrations.

---

## /404.html

### Page Not Found | School Of Freelancing

#### 404 Not Found
The page you were looking for doesn't exist.
    While you're here, play the School of Freelancing Dino Game!

##### GAME OVER
Your score:00000

SPACE / ↑Jump   •↓Duck   •Tapto jump on mobile


---

## /index.html

### Freelancing Training — Linux Tech Support | 5.0★ Rated

##### What Freelancing Training Do We Offer?
Live, hands-on, instructor-led Linux & AI training

##### Linux Freelancing Training
Become an in-demand Linux system administrator, build a freelance business, and win
                                    high-paying global clients.

Linux Training Features:

- 90 Hands-on Training Sessions
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Hermes Agent Freelancing Training
Build an in-demand freelance career as a Hermes AI Agent Engineer and attract
                                    premium global projects.

Hermes Agent Freelancing Training Features:

- 20 Hands-on Training Sessions
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Telnyx SMS API Freelancing Training
Learn Telnyx—the most in-demand messaging skill in the freelance market and attract
                                    premium global clients now!

Telnyx SMS Training Features:

- 30 Hands-on Training Sessions
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### What Do Students Say?
Definitely one of the best schools to kickstart your freelancing career. The expertise
                                they share is of global quality, keeping students up to date with the latest technology
                                trends.

One of the best institutes for freelancers in Bangladesh, even the world. The instructor
                                was very knowledgeable and helpful, explaining complicated ideas in a way that was
                                simple to understand.

School of Freelancing is the best place for Linux freelancing. I learned and earned my
                                first income working with this school. Highly recommended.

##### What Support Do We Provide?
Fast global support—always on

##### DigitalOcean Tech Support
DigitalOcean 24/7 Tech Support for Linux Servers, AI, Kubernetes, VPS, Networking,
                                    and Production Automation.

DigitalOcean Support Features:

- 24/7 Emergency Response
- Full Server Maintenance
- Production-Ready App Deployment
- Automated Backup & Monitoring
##### Hummingbot Setup Support
Can't get Hummingbot running? Get expert help fixing installation, dependency, API,
                                    and configuration bugs now.

Hummingbot Setup Features:

- 24/7 Emergency Response
- Setup Production Hummingbot on Tailscale
- Setup MCP, Client Gateway & Telegram Bot
- API Integration, Strategy & Bug Fixing
##### Voice AI Agent Setup Support
AI Agent Setup Support for voice agent build, STT/LLM/TTS integration, telephony,
                                    webhooks, function call configs.

Voice AI Agent Setup Features

- 24/7 Emergency Response
- AI Prompt & Conversation Flows
- Telephony SIP, API & Webhook Integration
- Campaign, CRM Integration & Testing

---

## /llms-full.txt

### llms-full.txt


---

## /llms.txt

### llms.txt


---

## /robots.txt

### robots.txt


---

## /resource-center/index.html

### Resource Center | School of Freelancing

##### FAQs
Quick answers about our training programs, payment, technical support, and how registration works.

##### Testimonials
Read what past students and support clients say about training with, and getting support from, School of Freelancing.

##### Intro Video
Watch a short video introduction to School of Freelancing's training and support offerings.

##### Case Studies
Real case studies from clients: Docker deployments, AI integrations, VoIP systems, and trading infrastructure.

##### Guide: Deploy a Linux Server
Step-by-step guide to deploying a production-ready Ubuntu Linux server, from installation to monitoring.

##### Guide: Containerize a Legacy App
Step-by-step guide to containerizing legacy web applications with Docker and Docker Compose.

##### Guide: Set Up a VoIP Phone System
Complete guide to setting up FusionPBX/FreeSWITCH for a professional VoIP phone system.

##### Guide: Create Your First AI Chatbot
Step-by-step guide to building an AI chatbot using the Claude API, from prompts to production.

##### Guide: Automate a Repetitive Task
Step-by-step guide to automating business tasks with Python and cron: email, files, and data entry.


---

## /resource-center/linux-deployment/index.html

### How to Deploy a Linux Server from Zero to Production | School of Freelancing

##### Overview
This guide walks you through deploying a production-ready Ubuntu Linux server from scratch. You'll learn server initialization, security hardening, networking configuration, package management, systemd service setup, backup strategies, and monitoring — everything needed to run reliable production infrastructure.

##### Prerequisites
- A Linux server instance (VPS or dedicated): Ubuntu 24.04 LTS or 26.04 LTS recommended
- SSH client on your local machine
- A domain name (optional but recommended)
- Basic Linux command-line familiarity
##### Step 1: Initial Server Setup & SSH Access
##### 1.1 Get Root Access
Upon first login, establish a secure connection:

Update your system packages immediately:

##### 1.2 Create a Non-Root User
Never run production services as root. Create a dedicated user:

##### 1.3 Configure SSH Key-Based Authentication
On your local machine, generate an SSH key if you don't have one:

Copy the public key to your server:

##### 1.4 Disable Password Authentication
Edit SSH configuration to use only keys:

Set these options:

Restart SSH:

##### Step 2: Security Hardening
##### 2.1 Configure UFW Firewall
Enable the firewall and allow only necessary ports:

##### 2.2 Fail2Ban for Brute-Force Protection
Protect against repeated login attempts:

##### 2.3 Automatic Security Updates
##### Step 3: Networking & Domain Configuration
##### 3.1 Set Hostname
Add your hostname to the hosts file.

##### 3.2 Point Domain to Server
In your domain registrar's DNS settings, create an A record pointing your domain to your server's IP address. Allow 15-30 minutes for DNS propagation.

##### Step 4: Web Server & SSL Configuration
##### 4.1 Install Nginx
##### 4.2 Obtain SSL Certificate with Certbot
Certbot automatically configures Nginx for HTTPS. Verify at https://yourdomain.com

##### Step 5: Package Management & Services
##### 5.1 Install Essential Tools
##### 5.2 Create a Systemd Service (Example)
For custom applications, create a systemd service file:

Add:

Enable and start:

##### Step 6: Backup & Disaster Recovery
##### 6.1 Create a Backup Script
Add:

Make it executable:

##### 6.2 Schedule Automated Backups
Add a daily backup at 2 AM:

##### Step 7: Monitoring & Logging
##### 7.1 Monitor System Resources
##### 7.2 Check System Logs
##### Common Troubleshooting
##### SSH Connection Refused
Verify SSH is running and port 22 is open in your firewall. Check with:sudo ufw status

##### Certificate Errors
Verify DNS is pointing to your server:nslookup yourdomain.com. Test with:sudo certbot renew --dry-run

##### Out of Disk Space
Check disk usage:df -h. Delete old logs or backups as needed.

##### Next Steps
You now have a production-ready Linux server. Next, you can:

- Deploy applications (Docker, Node.js, Python, etc.)
- Set up a database (PostgreSQL, MySQL)
- Configure a reverse proxy for multiple sites
- Implement load balancing for high-traffic applications
- Set up monitoring and alerting for production uptime
##### Learn More
For hands-on training and expert guidance, check out ourLinux Freelancing Trainingprogram that covers everything from server setup through production operations.


---

## /resource-center/docker-containerize/index.html

### How to Containerize a Legacy Web Application | School of Freelancing

##### Overview
This guide teaches containerizing existing web applications with Docker. You'll create a Dockerfile, build optimized images, and deploy with Docker Compose — enabling reliable, scalable deployments.

##### Prerequisites
- Docker installed on your development machine
- Your web application source code (Node.js, Python, PHP, etc.)
- Basic familiarity with your application's dependencies
##### Step 1: Create a Dockerfile
Create aDockerfilein your application's root directory:

##### Step 2: Build the Docker Image
Test locally:

##### Step 3: Create Docker Compose
Createdocker-compose.ymlfor multi-container orchestration:

##### Step 4: Deploy to Production
Verify all services running:

##### Step 5: SSL/HTTPS Configuration
Install Certbot on the host and mount certificates into the nginx container:

##### Next Steps
- Implement health checks and monitoring
- Set up automated backups for database containers
- Deploy to production servers with Compose
- Implement container logging and monitoring
Learn more in ourDocker Trainingprogram.


---

## /resource-center/testimonials/index.html

### What our customers say | School of Freelancing

##### Student experience with School of Freelancing
Definitely one of the best school to kickstart your freelancing career. The expertise they share and provide are of global quality ensuring that the students are up to date with the recent trend of technology along with the know how of the skills. This is Industry 4.0 and School of Freelancing is totally ready for it.

##### Trainer feedback for School of Freelancing
As per my experience, one of the best institutes for freelancers ever in Bangladesh — even in the world. They have talented, skilled, sincere, dignified, respectable trainers. The instructor was very knowledgeable and helpful, and the training was excellent. Mr. Masum had the ability to convey complicated ideas in a way that was simple to comprehend, with beneficial examples. It's really proud to be a part of such a great School of Freelancing!

##### Career results after Linux freelancing training
Last year, I was desperately looking for the right platform with proper guidance to start my Linux freelancing career, and then I met Karim (Masum) and started my Linux freelancing journey with him. Today, when I check my profile on freelancing platforms, I can see more than 15 projects, all completed with 5-star ratings — which would never have been possible without the training and guidance I received from School of Freelancing. I will definitely recommend this platform to others.

##### First income after training with School of Freelancing
School Of Freelancing is the best place for Linux freelancing. I learned and earned my first income working with this school. Highly recommended.

##### Referral from a fellow student
A place run by my old schoolmate, who is technically sound and has genuinely innovative ideas in freelancing.

##### Learning and earning through freelancing
In this era, freelancing plays a vital role in earning foreign currency. "School Of Freelancing" is one of the best places to learn and to earn.


---

## /resource-center/ai-chatbot/index.html

### How to Create Your First AI Chatbot | School of Freelancing

##### Overview
This guide shows how to build an AI chatbot using Claude API. You'll authenticate, design prompts, and deploy a working chatbot that answers customer questions intelligently.

##### Prerequisites
- Python 3.8+ installed
- Claude API key (get at console.anthropic.com)
- Basic Python programming knowledge
##### Step 1: Install Dependencies
##### Step 2: Create Your Chatbot
Createchatbot.py:

##### Step 3: Build a Web Interface
Createapp.py:

##### Step 4: Create Frontend
Createindex.html:

##### Step 5: Deploy to Production
Use Docker to containerize and deploy on your Ubuntu server.

##### Pro Tips
- Customize the system promptfor your specific use case
- Add conversation historyfor multi-turn conversations
- Implement rate limitingto control costs
- Monitor token usageto optimize expenses
Learn advanced AI integration in ourClaude AI Trainingprogram.


---

## /resource-center/faqs/index.html

### Frequently Asked Questions and Answers — SOF

##### Freelancing Training FAQs
##### Client Support FAQs

---

## /resource-center/intro-video/index.html

### Linux Freelancing Training — Watch Page

##### School of Freelancing introduction video
##### About This Training
Linux Freelancing Training is a hands-on Linux system administration and AI automation program built by freelancers for freelancers. Master high-demand technical skills—including Linux server management, VoIP configurations, and AI agent deployment—to land high-paying marketplace gigs and secure direct client relationships.

##### You'll leave with:
- An improved version of a real task you regularly perform.
- Practical client outreach strategies to win contracts on global freelancing platforms.
- Hands-on experience in Linux system administration and how it can be applied to online earning.
- Stronger habits for deploying, troubleshooting, and reviewing Linux server applications.
##### What does the School of Freelancing provide?
This introductory video explains the School of Freelancing approach to
  practical Linux and AI freelancing training and remote technical support.
  The program is designed for people who want hands-on skills and for clients
  who need professional technical assistance with real projects.

Watch the video to understand the training and support services, then
  explore the relevant service or training page for detailed information.


---

## /resource-center/automation/index.html

### How to Automate Your First Repetitive Task | School of Freelancing

##### Overview
This guide teaches automating common business tasks: processing files, sending emails, managing data, and scheduling recurring jobs. You'll write a Python script and schedule it to run automatically on your Linux server.

##### Prerequisites
- Ubuntu Linux server with Python 3 installed
- Basic Python programming knowledge
- A repetitive task you want to automate
##### Example: Automated Daily Report Email
Let's automate sending a daily sales report via email:

##### Step 1: Create the Python Script
##### Step 2: Save and Test
##### Step 3: Schedule with Cron
Edit crontab to run daily at 8 AM:

Add this line:

##### More Automation Ideas
- File Processing:Convert images, compress files, organize folders
- Data Entry:Parse PDFs, extract data, populate databases
- API Integration:Sync data between tools (Stripe to database, etc.)
- Backup & Cleanup:Archive old files, delete temp data daily
- Monitoring:Check if services are running, send alerts if down
##### Best Practices
- Log output for debugging:>> /var/log/script.log 2>&1
- Use absolute paths in scripts (not relative paths)
- Test scripts manually before scheduling with cron
- Monitor cron logs:grep CRON /var/log/syslog
- Set proper error handling and email alerts on failure
Learn advanced automation techniques in ourOpenClaw Automation Trainingprogram.


---

## /resource-center/voip-setup/index.html

### How to Set Up Your Own VoIP Phone System | School of Freelancing

##### Overview
This guide teaches you how to deploy FusionPBX, an open-source VoIP PBX system, on your Ubuntu server. You'll handle extensions, IVR menus, call routing, and SIP trunking — giving your business complete control over phone infrastructure and eliminating expensive carrier fees.

##### Prerequisites
- A production-ready Ubuntu 24.04 LTS server (minimum 2GB RAM, 20GB disk)
- A domain name for SIP registration
- An external SIP trunk provider (Twilio, Telnyx, or similar)
- Basic Linux command-line familiarity
##### Step 1: Install FusionPBX
##### 1.1 Install FreeSWITCH Dependencies
FusionPBX is built on FreeSWITCH. Install required packages:

##### 1.2 Install FusionPBX
Clone the FusionPBX repository and run the installer:

The installer will prompt for PostgreSQL password and domain configuration.

##### 1.3 Secure the Web Interface
Access FusionPBX at https://your-domain.com (username: admin, password: provided during install).

Immediately change the default password in Settings → Accounts.

##### Step 2: Configure Extensions
##### 2.1 Create Your First Extension
In FusionPBX web interface: Dialplan → Extensions → Add

- Extension:1000
- Enabled:Yes
- Description:Main Office
- Voicemail:Enable
- Voicemail Password:Strong password
- Caller ID Name:Your Business Name
- Caller ID Number:Main phone number
Save and note the SIP credentials (username/password) for connecting a phone or softphone.

##### 2.2 Configure SIP Phones or Softphones
Use these credentials to register:

- Proxy/SIP Server:your-domain.com
- Port:5060 (or 5061 for TLS)
- Username:Extension (e.g., 1000)
- Password:As configured above
- Display Name:Your name
##### Step 3: Build an IVR (Interactive Voice Response)
##### 3.1 Create an IVR Menu
In FusionPBX: Dialplan → IVR → Add

- Name:Main Menu
- Greet Long:"Welcome to [Company Name]. Press 1 for sales, 2 for support, 0 for operator."
- Menu Options:Press 1 → Route to extension 1001 (Sales)Press 2 → Route to extension 1002 (Support)Press 0 → Route to extension 1000 (Operator)
- Press 1 → Route to extension 1001 (Sales)
- Press 2 → Route to extension 1002 (Support)
- Press 0 → Route to extension 1000 (Operator)
##### Step 4: Set Up SIP Trunking
##### 4.1 Configure Telnyx SIP Trunk (Example)
Register with Telnyx, get your SIP credentials, then in FusionPBX: Advanced → SIP Profiles → External Profile

Add gateway settings (Gateways tab):

- Name:telnyx-trunk
- Proxy:sip.telnyx.com
- Username:Your Telnyx username
- Password:Your Telnyx password
- Realm:sip.telnyx.com
##### 4.2 Create Dialplan for Outbound Calls
In FusionPBX: Dialplan → Dialplan → Add outbound route

- Expression:^(\d{10})$ (for 10-digit US numbers)
- Gateway:telnyx-trunk
- Action:bridge {sip_from_user=$1@sip.telnyx.com}
##### Step 5: Call Recording & Voicemail
##### 5.1 Enable Call Recording
In Extensions settings, enable "Record Calls" for quality assurance and compliance.

##### 5.2 Voicemail to Email
Configure voicemail-to-email in Settings → Email to notify users of voicemails automatically.

##### Step 6: Backup & Monitoring
##### 6.1 Backup FusionPBX Configuration
Schedule this daily via cron.

##### 6.2 Monitor System Health
In FusionPBX: System → System Status

Monitor active calls, registered extensions, and SIP trunk status.

##### Common Troubleshooting
##### No Inbound/Outbound Audio (One-Way Audio)
Check: 1) SIP trunk credentials correct? 2) Firewall allows RTP ports (16384-32767)? 3) NAT settings correct?

##### SIP Registration Fails
Verify: 1) Domain DNS resolves? 2) Port 5060/5061 open? 3) Username/password correct?

##### Extensions Don't Register
In FreeSWITCH console:freeswitch> sofia statusto see registration status. Check logs:tail -f /var/log/freeswitch/freeswitch.log

##### Next Steps
- Add additional extensions for team members
- Create department-specific IVR menus
- Integrate with CRM (Salesforce, etc.)
- Set up call center features (agents, queues)
- Implement call center dialer functionality
##### Learn More
For comprehensive hands-on training, enroll in ourFusionPBX VoIP Trainingprogram.


---

## /resource-center/case-studies/index.html

### Linux & AI Freelancing Case Studies | School of Freelancing

The case studies below represent real transformations from School of Freelancing clients and graduates. Each shows the specific challenge, the solution implemented, and the quantified business outcomes.

##### Case Study 1: E-Commerce Startup – Docker Deployment & Infrastructure Optimization
##### The Challenge
A growing e-commerce startup was running their application on a single shared server with manual deployment processes. Every code update required manual SSH sessions and error-prone file transfers. Their infrastructure was unreliable, with frequent downtime impacting customer trust and sales.

##### The Solution
School of Freelancing's Docker Engineer Services containerized their entire application stack: web application, database, cache, and background workers. We deployed a Docker Compose environment on their dedicated Ubuntu server with Nginx reverse proxy, SSL/TLS, automated health checks, and restart policies that ensured 24/7 reliability.

##### The Results
- Uptime improved from 92% to 99.7%— automatic container restart and health monitoring eliminated manual intervention
- Deployment time reduced from 45 minutes to 3 minutes— automated Docker Compose updates replaced error-prone manual deployments
- Production issues diagnosed 10x faster— centralized container logs with proper rotation made troubleshooting straightforward
- Infrastructure costs reduced by 18%— containerization enabled scaling down from 3 servers to 1, with better resource utilization
##### Case Study 2: Enterprise SaaS Platform – GitHub Enterprise Server Deployment
##### The Challenge
A B2B SaaS company with 45 developers was using cloud GitHub.com but had new compliance requirements mandating on-premise Git hosting for code and IP security. They needed to migrate 200+ repositories and implement CI/CD automation without losing Git history or disrupting development.

##### The Solution
School of Freelancing deployed GitHub Enterprise Server (GHES) on the customer's private infrastructure. We migrated all 200+ repositories preserving Git history, configured SAML authentication linking to their directory service, and built GitHub Actions CI/CD pipelines automating testing and deployment for all codebases.

##### The Results
- Zero downtime migration— all 200+ repositories migrated in parallel, development teams unaffected
- Compliance requirements met— on-premise Git hosting satisfied security audit requirements for customer contracts
- CI/CD automation completed— 18 GitHub Actions workflows reduced manual testing and deployment from hours per day to 15 minutes
- Developer productivity increased— self-service CI/CD visibility enabled teams to detect issues minutes after commit, not hours later
##### Case Study 3: Outbound Call Center – FusionPBX VoIP Deployment
##### The Challenge
A 50-agent outbound call center was paying $45/month per agent to a traditional PBX provider plus expensive per-minute charges. They had no control over their phone infrastructure and limited ability to customize call routing or implement advanced features their clients needed.

##### The Solution
School of Freelancing deployed FusionPBX on dedicated Ubuntu servers providing a fully self-hosted PBX system. We configured 50 extensions, implemented intelligent call routing, set up IVR menus for client-specific routing, integrated with Twilio SIP trunks for inbound/outbound calls, and trained the team to manage their own system.

##### The Results
- Monthly PBX costs reduced from $2,250 to $400— eliminated per-agent licensing and moved to VOIP trunk costs only
- Flexible call routing implemented— client-specific IVR menus and custom routing increased customer satisfaction
- Self-service system management— internal team now manages extensions and features without vendor support tickets
- Call quality improved— direct control over codec and network settings optimized audio quality for mission-critical outbound calling
##### Case Study 4: AI Chatbot Startup – LocalAI Deployment for Cost Reduction
##### The Challenge
An AI startup building customer support chatbots was spending $8,000/month on OpenAI API calls for LLM inference. As their platform scaled, API costs were becoming the largest expense and threatened their unit economics. They needed to reduce inference costs without sacrificing model quality or latency.

##### The Solution
School of Freelancing deployed LocalAI on their infrastructure, running open-source LLMs (Mistral, Llama2) with quantization optimization. We set up load balancing across multiple LocalAI instances, implemented caching for frequently-asked questions, and created a fallback to OpenAI for edge cases where accuracy requirements mandated the paid API.

##### The Results
- Inference costs reduced by 92%— from $8,000/month to ~$600/month for GPU infrastructure
- Model quality maintained— quantized open-source models performed within 3% accuracy of expensive APIs for their use cases
- Response latency improved— local inference eliminated cloud API round-trip latency, improving user experience
- Vendor independence achieved— no longer dependent on OpenAI pricing changes or API rate limits
##### Case Study 5: B2B SaaS Backend – AI Integration with Claude API
##### The Challenge
A B2B SaaS platform needed to add AI-powered document analysis to their product but had no in-house AI expertise. They needed to integrate Claude API, build prompt engineering for their specific use case, and scale analysis to handle thousands of daily documents without exceeding budget.

##### The Solution
School of Freelancing designed and implemented Claude API integration into their backend, developing specialized prompts for their document types, implementing batching for cost efficiency, and building logging/monitoring for production reliability. We also established token usage tracking and optimization strategies to control API costs as volume scaled.

##### The Results
- AI feature launched in 2 weeks— expert implementation accelerated time-to-market vs. internal team development
- Document analysis accuracy at 96%— specialized prompts optimized for their domain achieved production-grade accuracy
- API costs predictable and controlled— batching and prompt optimization kept Claude costs at ~$200/month despite high volume
- Customers report 40% time savings— automated document analysis replaced manual review processes
##### Ready for Your Own Transformation?
Whether you need Docker deployment, AI integration, VoIP infrastructure, or Linux expertise, School of Freelancing has the proven experience to deliver results.


---

## /legal/index.html

### Legal | School Of Freelancing

Legal information governing School of Freelancing's Training and Client Support — including our Privacy Policy, Terms and Conditions, Refund Policy, Training Rules, and Credential Verification Support.

##### Legal
An overview of School of Freelancing's Privacy Policy, Terms and Conditions, Refund Policy, Training Rules, and Credential Verification Support — the legal terms governing our Training and Client Support.

##### Credential Verification
Credential Verification Support is how School of Freelancing confirms directly to a requesting organization that a named student completed our Training and holds the skills for a specific role, optionally including a formal recommendation.

##### Privacy Policy
School of Freelancing ("we," "us," "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you use our website, enroll in our trainings, or engage our tech support services.

##### Refund Policy
This Refund Policy explains when a refund is and isn't available for School of Freelancing Training and Client Support.

##### Terms and Conditions
By accessing or using School of Freelancing ("we," "us," "our," the "Platform") — including our website, Trainings, and Support — you ("you," "user," "client") agree to these Terms and Conditions. If you disagree, do not use the Platform.

##### Training Rules
Training Rules ("Ground Rules") apply to everyone enrolled in School of Freelancing's Linux Freelancing Training. They keep the environment fair, focused, and productive for trainees and mentors, and may be updated as the program evolves.


---

## /legal/privacy-policy/index.html

### Privacy Policy — School of Freelancing

##### 1. Introduction
School of Freelancing ("we," "us," "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you use our website, enroll in our trainings, or engage our tech support services.

##### 2. Information We Collect
- Information you provide:name, email, phone number, payment details, and messages sent via enrollment, contact, or support forms.
- Automatically collected data:IP address, browser type, device information, and pages visited, gathered via cookies and analytics tools.
- Service-related data:server access details, configuration information, or credentials you provide for tech support engagements, used solely to complete the agreed work.
##### 3. How We Use Information
- To deliver trainings, process enrollments, and provide tech support services.
- To communicate with you about your account, orders, or support requests.
- To improve our website, curriculum, and services.
- To send marketing or promotional messages, where you have opted in (you may unsubscribe at any time).
- To comply with legal obligations and prevent fraud or misuse.
##### 4. Legal Basis for Processing
Where applicable law requires it, we process your information based on your consent, the necessity to perform a contract with you (e.g. training enrollment or a support engagement), compliance with a legal obligation, or our legitimate interest in operating and improving the Platform.

##### 5. Sharing & Disclosure
We do not sell your personal information. We may share information with:

- Service providers who help us operate the Platform (e.g. payment processors, hosting providers, email tools).
- Freelance marketplaces (e.g. Upwork, Contra) when a service engagement is initiated through those platforms.
- Authorities, where required by law or to protect our rights, safety, or property.
##### 6. Third-Party Services
Our Platform may link to or integrate with third-party services (e.g. GitHub, DigitalOcean, Twilio, Telnyx, Google Analytics). These third parties have their own privacy practices, and we encourage you to review their policies.

##### 7. Cookies & Tracking
We use cookies and similar technologies to remember preferences, understand site usage, and support analytics. You can control cookies through your browser settings; disabling them may affect some site functionality.

##### 8. Data Security
We use reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.

##### 9. Data Retention
We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements, after which it is deleted or anonymized.

##### 10. Your Rights
Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, and to object to certain processing or request data portability. To exercise these rights, contact us using the details below.

##### 11. Children's Privacy
Our services are not directed at individuals under 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us information, please contact us so we can remove it.

##### 12. International Transfers
As we serve clients and students globally, your information may be processed or stored in countries other than your own. We take steps to ensure appropriate safeguards are in place for such transfers.

##### 13. Changes to This Policy
We may update this Privacy Policy from time to time. Continued use of the Platform after changes are posted constitutes acceptance of the revised policy.

##### 14. Contact Us
Ask any questions about this privacy policy to our emailoffice@schooloffreelancing.com.


---

## /legal/refund-policy/index.html

### Refund Policy — School of Freelancing

##### 1. Introduction
This Refund Policy explains when a refund is and isn't available for School of Freelancing's Linux Freelancing Training. By enrolling and paying for training, you confirm that you've read and understood this policy, that the training content is relevant to leveling up your skills, and that you intend to complete the program and work toward your first freelancing income before your training deadline. If you don't agree with this policy, please don't enroll.

##### 2. General Policy — All Sales Are Final
As our training is delivered as a digital, mentor-led service — including hands-on guidance from a mentor who pauses their own freelancing work to guide you — all sales are treated as final except in the limited circumstances described below. Making a purchase on our site means you accept this policy in full.

##### 3. When a Refund Is Available (Training)
For our Linux Freelancing Training, we offer a refund in two specific situations:

- Duplicate payment:if you accidentally paid twice for the same training (for example, from a double-click during checkout), the duplicate charge is refundable.
- Delayed start:if School of Freelancing or your assigned mentor fails to begin your training within 3 business days of enrollment, you may request a refund.
Outside of these two cases, payments for training are non-refundable.

##### 4. Refund Timing & Processing Fees
Approved refunds are initiated after 90 days, and a processing fee is deducted from the refunded amount.

##### 5. Refund Conditions for Tech Support Clients
For clients who engage us for Linux tech support services (e.g. server setup, Telnyx/Twilio SMS API support, FusionPBX VoIP support, Hummingbot setup, and related support engagements), the same "all sales are final" principle applies, since tech support is a hands-on service performed at your request rather than a shippable good. We offer a refund in two specific situations, mirroring our training policy:

- Duplicate payment:if you're accidentally charged twice for the same support engagement (for example, from a double-click during checkout or invoicing), the duplicate charge is refundable.
- Delayed start:if we fail to begin your tech support engagement within 3 business days of your payment and scheduling confirmation, you may request a refund.
Once a support engagement has started — meaning our technician has begun diagnosing, configuring, or working on your server, system, or account — the service is considered rendered and the engagement is non-refundable, regardless of the outcome, since the time and expertise have already been delivered. If you're unsatisfied with the work performed, please contact us first so we can address the issue directly; we're happy to review the engagement and make it right where reasonably possible, though this is handled as a service remedy rather than a refund.

As with training, approved tech support refunds are initiated after 90 days and are subject to a processing fee deducted from the refunded amount.

##### 6. Pausing Instead of Refunding (Training)
If you run into a scheduling conflict rather than needing a refund, ourTraining Rulesallow you to pause training for up to two weeks. Longer absences may lead to temporary or permanent disqualification and a re-admission fee rather than a refund — see our Training Rules for the full details on absences and re-enrollment.

##### 7. Disqualification Is Not a Refund Trigger
Refunds are not issued for trainees who are suspended or disqualified for violating our Training Rules — including extended unexcused absence, inappropriate conduct toward a mentor or client, unauthorized VPN or dual-boot use, or attempted phishing/hacking. These situations are governed by ourTraining Rules, not this Refund Policy.

##### 8. How to Request a Refund
To request a refund under one of the eligible conditions above — for either training or tech support — contact us via ourcontact pagewith your order or enrollment details and the reason for your request. We'll review each request individually against the conditions in this policy.

##### 9. Changes to This Policy
We may update this Refund Policy from time to time as our services evolve. Continued enrollment, purchase, or use of our services after changes are posted constitutes acceptance of the revised policy.

##### 10. Contact Us
Ask any questions about this refund policy to our emailoffice@schooloffreelancing.com.


---

## /legal/terms-and-conditions/index.html

### Terms and Conditions — School Of Freelancing

##### 1. Acceptance of Terms
By accessing or using School of Freelancing ("we," "us," "our," the "Platform"), including our website, trainings, and technical support services, you ("you," "user," "client") agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please do not use the Platform.

##### 2. Services We Offer
School of Freelancing provides two categories of service:

- Training:Linux and cloud freelancing trainings and bootcamps for beginners, covering system administration, VoIP platforms, DevOps tooling, and AI/agentic systems.
- Tech Support:Professional Linux and cloud technical support services delivered to clients worldwide, including server administration, deployment, and third-party platform integration.
##### 3. Eligibility
You must be at least 18 years old, or the age of majority in your jurisdiction, to enroll in a training or purchase a service. By using the Platform you confirm you meet this requirement.

##### 4. Accounts
You are responsible for maintaining the confidentiality of any account credentials and for all activity under your account. Notify us immediately of any unauthorized use.

##### 5. Training Enrollment & Access
- Enrollment is confirmed upon receipt of payment (where applicable) or explicit confirmation from us.
- Training materials are provided for your personal, non-commercial educational use only.
- Access duration, live session schedules, and any capstone/project requirements are specified per-training at the time of enrollment.
- We do not guarantee specific employment, freelance income, or client outcomes as a result of completing any training.
##### 6. Tech Support Services
- Scope of work, deliverables, and pricing for tech support engagements are agreed upon in writing (via proposal, contract, or the freelancing platform used — e.g. Upwork, Contra) before work begins.
- Clients are responsible for providing accurate access credentials, environment details, and timely feedback needed to complete the engagement.
- Any work involving production systems is performed at the client's direction; clients are strongly encouraged to maintain their own backups before support work begins.
- Additional work outside the agreed scope may incur additional fees, to be agreed upon before proceeding.
##### 7. Payments, Fees & Refunds
- Fees for trainings and support services are as listed on the Platform or as quoted directly to you.
- Payments made through third-party freelance platforms (e.g. Upwork, Contra) are also subject to that platform's own payment and dispute terms.
- Refunds, where offered, are handled on a case-by-case basis and must be requested within the timeframe stated at the time of purchase. Completed support work and delivered custom deployments are generally non-refundable.
##### 8. Acceptable Use
You agree not to:

- Use the Platform or our services for any unlawful purpose, including unauthorized access to systems you do not own or have permission to modify.
- Share, resell, or redistribute training materials without our written permission.
- Reverse-engineer, scrape, or misuse the Platform's content or infrastructure.
- Submit false or misleading information when engaging our services.
##### 9. Intellectual Property
All training content, curriculum, branding, and website materials are the property of School of Freelancing unless otherwise stated. Custom code, configurations, or deliverables produced specifically for a client under a paid support engagement are owned by the client upon full payment, unless a separate agreement states otherwise.

##### 10. Third-Party Platforms
Our services may involve or reference third-party platforms (e.g. Upwork, Contra, GitHub, DigitalOcean, Twilio, Telnyx). We are not responsible for the availability, policies, or actions of these third parties.

##### 11. Disclaimer of Warranties
The Platform and services are provided "as is" and "as available," without warranties of any kind, express or implied, including fitness for a particular purpose, non-infringement, or uninterrupted availability.

##### 12. Limitation of Liability
To the maximum extent permitted by law, School of Freelancing shall not be liable for any indirect, incidental, special, or consequential damages, including data loss, lost profits, or business interruption, arising from your use of our trainings or support services. Our total liability for any claim shall not exceed the amount you paid for the specific service giving rise to the claim.

##### 13. Indemnification
You agree to indemnify and hold School of Freelancing harmless from any claims, damages, or expenses arising from your misuse of the Platform, violation of these Terms, or violation of any third-party rights.

##### 14. Termination
We may suspend or terminate your access to trainings or support services at our discretion if you violate these Terms. You may discontinue use of the Platform at any time.

##### 15. Privacy
Our collection and use of personal information is described in our Privacy Policy. By using the Platform, you consent to that collection and use.

##### 16. Changes to These Terms
We may update these Terms from time to time. Continued use of the Platform after changes are posted constitutes acceptance of the revised Terms.

##### 17. Governing Law
These Terms are governed by the laws of Bangladesh, without regard to conflict-of-law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bangladesh, unless otherwise required by applicable consumer protection law in your jurisdiction.

##### 18. Contact Us
Ask any questions about this terms & conditions to our emailoffice@schooloffreelancing.com.


---

## /legal/training-rules/index.html

### Training Rules — School Of Freelancing

##### 1. Introduction
These Training Rules ("Ground Rules") apply to everyone enrolled in School of Freelancing's Linux Freelancing Training. They exist to keep the training environment fair, focused, and productive for both trainees and mentors, and they may be updated from time to time as our program evolves.

##### 2. Enrollment & Eligibility
- You must provide accurate information when enrolling in the training.
- You must have your own PC, a dedicated high-speed wired internet connection, and a valid photo ID.
- Use of a VPN is not permitted during training sessions.
- Dual-booting or using Windows during the training period is not permitted.
- You may not attend other training programs or vendor certification exams while enrolled in this training.
##### 3. Attendance & Scheduling
- Regular sessions run five days a week (excluding Friday and Saturday). Attend on time, with full attention, and stay seated properly throughout.
- Coordinate a session time with your mentor in advance to avoid scheduling conflicts.
- To start or cancel a session, reconfirm with your mentor at least two hours beforehand.
- Arriving more than 30 minutes late may result in your mentor moving on to the next trainee in the queue.
- You may not take other phone calls during a session (aside from your mentor's); doing so may result in the session being cancelled without further notice.
- You may not perform other office work during a scheduled session; if this occurs, the mentor may disqualify that session and reschedule it for a day when you're free of other obligations.
- List Friday as unavailable on your freelancing marketplace profile, though you may still reach your mentor for advice on a Friday project if needed and available.
##### 4. Program Duration & Absence Policy
- The full program consists of 90 business-day sessions, to be completed within six months of your start date.
- You may pause training for up to two weeks total. An absence of one month results in temporary disqualification; you may restart from scratch after paying 25% of the training fee as a re-admission charge.
- An absence of six months from enrollment results in permanent disqualification. Restarting after that requires paying 50% of the training fee within one year of your original enrollment, and re-enrollment is subject to available capacity as communicated by your mentor.
- Trainees fully detached from training for one year are not eligible to rejoin any School of Freelancing program in the future and will be removed from Trello and Launchpad (GitHub access is retained).
- The "guaranteed earning" outcome applies only to trainees with no absences who complete Day 1 through Day 80 without interruption. Your mentor may reschedule a session if they are unable to attend for any reason.
##### 5. Communication Tools & Conduct
- All training is conducted through one-to-one Telegram chat, WhatsApp voice calls, and AnyDesk for remote sessions.
- Maintain prompt, professional communication with both your mentor and your clients/buyers throughout training and project work.
- Communication must remain respectful and professional at all times — no offensive language or swearing toward your mentor, clients, or buyers.
##### 6. Scope of Mentor Support
- Your mentor supports you through communication and technical guidance to help you land and complete your first Linux freelancing job — not an unlimited stream of future jobs.
- You may not ask your mentor to complete a project on your behalf, or to communicate directly with your client in your place; you handle client SSH access and project delivery yourself, with advice from your mentor.
- You may not offer your mentor, or School of Freelancing, outside business arrangements.
- You may not ask your mentor for help with personal or office tasks unrelated to your training.
- You should stay online and responsive when actively applying to jobs across marketplaces.
##### 7. Proof of Work & Trello Usage
- After each completed session, upload a Gist, YouTube link, and/or screenshot to the relevant Trello card as proof of work for mentor review.
- Trello is to be used strictly for training-task submissions and review — not for unrelated purposes.
##### 8. Freelancing Income During Training
Our goal is to help you finish sessions and gain real experience, so during training we only support you in earning your first Linux freelancing income. Chasing more income than that during the program can distract from the sessions and your learning focus. Once training is complete, you're free to take on as many projects as you'd like.

##### 9. Behavior & Security
- You may not attempt phishing or hacking against School of Freelancing's accounts, intellectual property, or any mentor's PC.
- Violations involving inappropriate language, phishing, or hacking will result in a temporary training pause and a notice on your Trello board requiring an explanation within 72 hours. A satisfactory explanation allows training to continue; failure to provide one results in disqualification and removal from Trello and GitHub.
- If a technical or natural issue disrupts training, your mentor may suspend sessions from either side without waiting for the issue to be resolved.
##### 10. Training Topics & Changes
- If something is unclear, ask your mentor directly and respectfully.
- School of Freelancing may change training schedules or module topics at any time; trainees will be notified promptly of such changes.
- If an OS or application update or bug affects a session and is outside the vendor's control at that time, your mentor may adjust the session topic accordingly.
- Discussion should stay within the scope of the training curriculum, and project work should relate to the skills being taught.
##### 11. Completion & Post-Training Support
- After successfully completing training and earning your first freelancing income, you're asked to leave a review of your experience and mark the training complete in Trello.
- You may reference your time with School of Freelancing when applying for jobs, and we may list you as a current or past trainee.
- After training, extended advisory support is available for a $300/year membership fee, with communication handled via Telegram and other agreed channels.
##### 12. Suspension & Disqualification
Violations of these rules — including unexcused absence, inappropriate conduct, unauthorized VPN or dual-boot use, phishing/hacking attempts, or performing office work during sessions — may lead to session cancellation, temporary suspension, or permanent disqualification as outlined above. If your account on any platform is suspended due to your own actions, you are responsible for the consequences.

##### 13. Miscellaneous
##### 14. Contact Us
Ask any questions about training rules, to our emailoffice@schooloffreelancing.com.


---

## /legal/credential-verification/index.html

### Credential Verification Support — School Of Freelancing

##### 1. Introduction
Credential Verification Support is the service through which School of Freelancing confirms directly to a requesting organization that a named student has successfully completed any of our training and possesses the necessary skills to work with that organization using a specific skill set. This may also include a formal recommendation from School of Freelancing.

##### 2. What Credential Verification Support Covers
When an organization — such as a prospective employer, client, or partner platform — wants to confirm that a specific student actually completed training with us, we verify this directly with that organization. This confirms training completion status with School of Freelancing; it is not a full transcript, performance review, or reference letter, and it does not disclose training content beyond what the student has authorized us to share.

##### 3. Eligibility & Fees
> Time since training completion
> Fee
> Within 1 year of completing training
> Free
> More than 1 year after completing training
> $20 USD, non-refundable, per completed verification
Students who completed training within the past year receive Credential Verification Support at no cost. Once more than one year has passed since a student's training completion date, a $20 non-refundable fee applies for us to process and complete a verification request.

##### 4. How an Organization Requests Verification
- Contact us via ourcontact pageindicating you are requesting Credential Verification Support.
- Provide the student's full name and any identifying details the student has given you (e.g. enrollment ID, approximate training dates) so we can locate the correct record.
- If the request falls outside the free 1-year window, arrange payment of the $20 verification fee before we begin processing.
- We will confirm training completion status directly with your organization, limited to the information the student has authorized us to disclose.
##### 5. The Student's Role in a Verification Request
Students should let us know which organization will be reaching out, and what specific information they're comfortable with us confirming (for example, dates of training, completion status). We only share what the student has indicated should be provided to the requesting organization.

##### 6. What Information We Share
We share only the information the student has authorized for that specific request — typically limited to confirming enrollment and successful completion of training with School of Freelancing. We do not disclose a student's personal contact details, payment history, or unrelated training records to a requesting organization without the student's direction. See ourPrivacy Policyfor how we handle personal information more broadly.

##### 7. Fees Are Non-Refundable
The $20 verification fee is non-refundable once a Credential Verification Support request has been submitted and processed, regardless of the outcome of the organization's own hiring or engagement decision.

##### 8. Turnaround Time
We aim to respond to verification requests as promptly as possible once all required information (and payment, if applicable) has been received. Complex or older records may take longer to locate and confirm.

##### 9. Changes to This Policy
We may update this Credential Verification Support policy from time to time. Continued use of this service after changes are posted constitutes acceptance of the revised policy.

##### 10. Contact Us
Ask any questions about credential verification support to our emailoffice@schooloffreelancing.com.


---

## /client-support/index.html

### Tech Support — School Of Freelancing

##### DigitalOcean Cloud Support
Hire DigitalOcean cloud experts for Linux, security, deployment, troubleshooting, and optimization—on demand.

DigitalOcean Support Features:

- 24/7 Emergency Response
- Full Server Maintenance
- Production-Ready App Deployment
- Automated Backup & Monitoring
##### Hummingbot Installation Support
Hire Hummingbot experts support to fix installation, dependencies, API, configuration, and deployment issues fast.

Installation Features:

- 24/7 Emergency Response
- Setup Production Hummingbot on Tailscale
- Setup MCP, Client Gateway & Telegram Bot
- API Integration, Strategy & Bug Fixing
##### Voice AI Agent Setup
Hire Voice AI Agent experts for Vapi, STT, LLM, TTS, telephony, API integration, and deployment.

Support Features:

- 24/7 Emergency Response
- AI Prompt & Conversation Flows
- Telephony SIP, API & Webhook Integration
- Campaign, CRM Integration & Testing
##### Linux Server Support
Hire Linux Server Support experts for setup, security, troubleshooting, optimization, and reliable deployment.

Linux Server Support Features:

- 24/7 Emergency Support
- Fast remote troubleshooting
- Monitoring Linux Server.
- Post-installation support.
##### Hermes Agent Setup
Hermes Agent production setup support for task automation, chat workflows, code and remote messaging control.

Hermes Agent Setup Features:

- Full Hermes Agent Setup.
- Model Integration.
- Multi-Profile System.
- Sandboxed Environment
##### Odysseus AI Setup
Hire Odysseus AI production setup to run private AI chats, autonomous agents, and productivity tools on your own hardware.

Odysseus Support Features:

- Odysseus AI production setup.
- Enterprise LLM Integration.
- Fine-Tuning Scripts.
- Collaboration Web UIs.
##### OpenClaw Setup Support
Hire OpenClaw self-hosted AI setup to run autonomous workflows and real computer tasks via chat apps.

OpenClaw Setup Features:

- OpenClaw Production Setup.
- Tool-Calling API Management.
- Secure Workflow Configuration.
- Autonomous Platform Deployment.
##### LocalAI Setup Support
Get LocalAI Self-Hosted LLM setup to run open-source LLMs, vision, voice, and video engines locally on your existing hardware.

LocalAI Setup Features:

- LocalAI Full Installation.
- Model Gallery & YAML Configuration.
- Models Directory Setup.
- Local API Endpoint support.
##### ZeroClaw Setup Support
Deploy ZeroClaw for your personal AI runtime, secure multi-LLM API routing, and low-latency language models.

ZeroClaw Setup Features:

- ZeroClaw Installation & configuration.
- Multi-LLM provider endpoint setup.
- Secure API routing integration.
- Post-installation infrastructure support.
##### GitLab Installation Support
GitLab Self-Managed setup support for teams to plan, code, secure, test, deploy & monitor apps from one UI.

Installation Features:

- On-premise secure installation.
- Seamless repository migration.
- Robust backup configurations.
- Optimized CI/CD runners.
##### GitHub Installation Support
Hire GitHub Installation Support for secure setup, configuration, troubleshooting, and repo management.

GitHub Installation Features:

- On-premise server deployment.
- Enterprise repository migration.
- Secure development workflows.
- Optimized Actions pipelines.
##### Docker Job Support
Hire Docker Job Support for deployment, troubleshooting, Docker Compose, containers, networking, and CI/CD.

Docker Support Features:

- Docker Application Setup
- Optimized Dockerfile builds
- Hardened non-root images.
- Secure secrets configuration.
##### Telnyx VoIP Setup
Telnyx VoIP installation support for SIP trunking, private IP routing, and global call center integrations.

Telnyx Setup Features:

- Full setup and SIP call test.
- Private IP network routing.
- High-availability SIP trunking.
- Secure call center APIs.
##### Twilio VoIP Setup
Hire Twilio VoIP Setup support for SIP trunking, call routing, phone numbers, and call center integration.

Twilio VoIP Setup Features:

- Full Twilio VoIP Setup.
- Phone numbers provisions.
- Creates custom call-routing logic.
- Tracks real-time call quality.
##### FusionPBX VoIP Setup
Hire FusionPBX VoIP Setup support for SIP, call routing, extensions, IVR, and call center integration.

FreeSWITCH Support Features:

- FusionPBX VoIP Setup and Test.
- Advanced dialplan configuration setup.
- Secure carrier trunking integration.
- High-availability FreeSWITCH tuning.
##### GOAutoDial VoIP Setup
Hire GOAutoDial VoIP Setup support for SIP, dialers, call routing, IVR, and call center integration.

GOAutoDial VoIP Setup Features:

- GOautodial full setup and test.
- Advanced Asterisk routing configuration.
- Scalable enterprise lead management.
- High-performance Kamailio engine tuning.
##### Ubuntu Linux Support
Hire Ubuntu Linux Support for server setup, troubleshooting, security, optimization, and system administration.

Ubuntu Support Features:

- Setup application production.
- Kernel optimization tuning options.
- Custom security hardening protocols.
- Automated DevOps node troubleshooting.
##### CentOS Linux Support
Hire CentOS Linux Support for server setup, troubleshooting, security, optimization, and system administration.

CentOS Support Features:

- Setup application CentOS.
- CentOS troubleshooting & security support.
- Modern enterprise migration strategies.
- 24-hour post-installation support.
##### OpenAI Platform Support
Hire OpenAI Platform Support for API setup, integrations, agents, troubleshooting, and production deployment.

OpenAI Support Features:

- OpenAI API Integration with app.
- Secure API key optimization.
- Structured data formatting setup.
- 24-hour post-installation support.
##### Claude Platform Support
Deploy Claude apps: optimize Anthropic pipelines, track large contexts, implement tool-calling, and secure middleware.

Claude Support Features:

- Anthropic Claude API integration.
- Context window tracking management.
- Structured tool-calling setups.
- 24-hour post-installation support.
##### Telnyx SMS Setup
Hire Telnyx SMS Setup support for messaging APIs, webhooks, phone numbers, and business SMS integration.

Telnyx SMS Setup Features:

- SMS messaging inbox delivery.
- A2P 10DLC brand registration.
- Bulk campaign setup optimization.
- Inbound/outbound webhook testing support.
##### Twilio SMS Setup
Hire Twilio SMS Setup support for messaging APIs, webhooks, phone numbers, and business SMS integration.

Twilio Support Features:

- Twilio Messaging setup and test.
- Automated bulk text messaging.
- Enterprise A2P 10DLC compliance.
- Production-grade communication infrastructure.
##### Jasmin SMS Gateway Setup
Hire Jasmin SMS Gateway Setup support for SMPP, routing, APIs, delivery, and enterprise SMS integration.

Jasmin SMS Gateway Setup Features:

- Jasmin SMS Gateway Full Setup
- SMPP/REST API Integration
- 2 Way Bulk SMS Test from CSV.
- 24-hour post-installation support.

---

## /client-support/hummingbot-installation-support/index.html

### Hummingbot — Installation | Hire Support

##### Support Overview
Hire expert Hummingbot Installation Support from School of Freelancing for Linux VPS setup, exchange API integration, strategy configuration, troubleshooting, security, and production optimization—without a full-time engineer.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3-5 Business Days (Fully Tested).
> Price
> $999 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Hummingbot ecosystem full installation using tailscale, secure exchange API connectivity, Telegram bot alerts, and liquidity mining/arbitrage strategy config.
> Best for:
> Algorithmic traders, crypto fund managers, and businesses needing rapid, production-ready bot architecture and post-installation troubleshooting.
> What you provide:
> Linux server from DigitalOcean, sub domains, and along with exchange API keys configured with appropriate trading permissions.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/ubuntu-linux-support/index.html

### Ubuntu Linux — Support | Hire Support

##### Support Overview
Hire Ubuntu Linux Support for server setup, troubleshooting, security, optimization, and system administration.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3 Business Days (Fully Tested).
> Price
> $311 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Ubuntu Linux server setup, troubleshooting, security hardening, performance optimization, and system administration.
> Best for:
> Individuals, teams, and businesses requiring production Ubuntu Linux server setup or ongoing system administration support without a full-time hire.
> What you provide:
> Team access to your Ubuntu server/VPS, along with any existing configuration files ready for production deployment.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/voice-ai-agent-setup/index.html

### Voice AI Agent — Setup | Hire Support

##### Support Overview
Hire Vapi voice AI setup support for assistant config, webhooks, SIP trunking, custom LLM functions & troubleshooting—minus full-time hire overhead.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3-5 Business Days (Fully Tested).
> Price
> $569 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Comprehensive Vapi AI voice agent setup, webhook routing, custom function calling, telephony/SIP integrations, and system troubleshooting.
> Best for:
> Businesses, agencies, and developers seeking production-ready Vapi voice bots, seamless CRM integrations, or expert infrastructure troubleshooting.
> What you provide:
> Vapi dashboard access, telephony provider credentials (e.g. Twilio/Telnyx SIP), and API specifications for required tool calls or webhooks.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/twilio-voip-setup/index.html

### Twilio VoIP — Setup | Hire Support

##### Support Overview
Hire Twilio VoIP Setup support for SIP trunking, call routing, phone numbers, and call center integration.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3 Business Days (Fully Tested).
> Price
> $539 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Twilio VoIP setup covering SIP trunking, call routing, phone number provisioning, and call center integration.
> Best for:
> Individuals, teams, and businesses requiring production Twilio VoIP setup or ongoing call center infrastructure support without a full-time hire.
> What you provide:
> Team access to your Twilio account and server/VPS, along with any existing routing or phone number configuration ready for production deployment.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/digitalocean-cloud-support/index.html

### DigitalOcean — AI-Native Cloud | Hire Support

##### Support Overview
Hire School of Freelancing for done-for-you DigitalOcean AI-native cloud support, including Linux, security, app deployment, troubleshooting, and optimization—without the cost of a full-time cloud engineer.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3-4 Business Days (Fully Tested).
> Price
> $499 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Comprehensive DigitalOcean AI-native cloud engineering covering Linux, security, app deployment, troubleshooting, and optimization.
> Best for:
> Individuals, teams, and businesses requiring urgent DigitalOcean troubleshooting or ongoing infrastructure support without a full-time hire.
> What you provide:
> Team access to your DigitalOcean account infrastructure/droplets, along with the domain and application files ready for production deployment.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/docker-job-support/index.html

### Docker — Job Support | Hire Support

##### Support Overview
Hire Docker Job Support for deployment, troubleshooting, Docker Compose, containers, networking, and CI/CD.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 2 Business Days (Fully Tested).
> Price
> $329 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Docker application deployment, troubleshooting, Docker Compose, container networking, and CI/CD pipeline configuration.
> Best for:
> Individuals, teams, and businesses requiring production Docker deployment or ongoing containerization support without a full-time hire.
> What you provide:
> Team access to your server/VPS, along with any existing Dockerfiles or Compose configuration ready for production deployment.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/github-installation-support/index.html

### GitHub — Installation | Hire Support

##### Support Overview
Hire GitHub Installation Support for end-to-end setup, GitHub Enterprise Server configuration, self-hosted GitHub Actions runner deployment, repository security rules, and team access troubleshooting. Part of our broaderLinux & DevOps Client Supportsuite.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 2 Business Days (Fully Tested).
> Price
> $319 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> GitHub Enterprise installation, self-hosted Actions runners, SSH/GPG keys, branch protection policies, and SSO/SAML integration.
> Best for:
> Teams, startups, and engineering managers needing production-grade GitHub infrastructure setup without full-time admin overhead.
> What you provide:
> Organization admin rights or server access (for self-hosted runners/Enterprise installations).
##### Scope of Deliverables
- GitHub Enterprise Server Setup:Deployment on AWS, GCP, Azure, or bare-metal Linux servers.
- Self-Hosted Actions Runners:Secure installation and automated runner scaling for CI/CD pipelines.
- Security & Governance:Branch protection rules, secret scanning, code owners setup, and 2FA policies.
- Migration Services:Seamless migration from local Git, Bitbucket, orGitLab instances.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/hermes-agent-setup/index.html

### Hermes Agent — Setup | Hire Support

##### Support Overview
Hire Hermes Agent production setup support for task automation, chat workflows, code and remote messaging control.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 2 Business Days (Fully Tested).
> Price
> $199 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Comprehensive Hermes Agent engineering covering task automation, chat workflows, code control, and remote messaging control.
> Best for:
> Individuals, teams, and businesses requiring production Hermes Agent setup or ongoing automation support without a full-time hire.
> What you provide:
> Team access to your server/VPS and messaging platform credentials, along with any existing automation workflows ready for production deployment.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/odysseus-ai-setup/index.html

### Odysseus — Self-hosted AI workspace setup | Hire Support

##### Support Overview
Hire School of Freelancing for expert Odysseus AI Setup, deployment, configuration, troubleshooting, and optimization—get production-ready AI infrastructure without the cost of hiring a full-time engineer.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 2 Business Days (Fully Tested).
> Price
> $185 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Comprehensive Odysseus AI engineering covering private AI chat deployment, autonomous agent configuration, and productivity tool setup on your own hardware.
> Best for:
> Individuals, teams, and businesses requiring production Odysseus AI setup or ongoing private AI infrastructure support without a full-time hire.
> What you provide:
> Team access to your hardware/server and any existing model or workflow files, ready for production deployment.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/telnyx-voip-setup/index.html

### Twilio VoIP — Setup | Hire Support

##### Support Overview
Hire Twilio VoIP Setup support for SIP trunking, call routing, phone numbers, and call center integration.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3 Business Days (Fully Tested).
> Price
> $539 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Twilio VoIP setup covering SIP trunking, call routing, phone number provisioning, and call center integration.
> Best for:
> Individuals, teams, and businesses requiring production Twilio VoIP setup or ongoing call center infrastructure support without a full-time hire.
> What you provide:
> Team access to your Twilio account and server/VPS, along with any existing routing or phone number configuration ready for production deployment.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/claude-platform-support/index.html

### Claude Platform — Support | Hire Support

##### Support Overview
Hire Claude Platform Support for API setup, integrations, agents, troubleshooting, and production deployment.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 1-2 Business Days (Fully Tested).
> Price
> $241 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Claude Platform API setup, agent integrations, application troubleshooting, and production deployment configuration.
> Best for:
> Individuals, teams, and businesses requiring production Claude Platform integration or ongoing AI infrastructure support without a full-time hire.
> What you provide:
> Team access to your Anthropic account/API keys and server/VPS, along with any existing application code ready for production deployment.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/twilio-sms-setup/index.html

### Twilio SMS — Setup | Hire Support

##### Support Overview
Hire Twilio SMS Setup support for messaging APIs, webhooks, phone numbers, and business SMS integration.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 1-2 Business Days (Fully Tested).
> Price
> $990 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Twilio SMS setup covering messaging API configuration, webhooks, phone number provisioning, and business SMS integration.
> Best for:
> Individuals, teams, and businesses requiring production Twilio SMS setup or ongoing business messaging support without a full-time hire.
> What you provide:
> Team access to your Twilio account and server/VPS, along with any existing messaging or webhook configuration ready for production deployment.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/fusionpbx-voip-setup/index.html

### FusionPBX — VoIP Setup | Hire Support

##### Support Overview
Hire FusionPBX VoIP Setup support for SIP, call routing, extensions, IVR, and call center integration.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3 Business Days (Fully Tested).
> Price
> $529 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> FusionPBX VoIP setup covering SIP configuration, call routing, extensions, IVR, and call center integration.
> Best for:
> Individuals, teams, and businesses requiring production FusionPBX VoIP setup or ongoing call center infrastructure support without a full-time hire.
> What you provide:
> Team access to your server/VPS and SIP trunk credentials, along with any existing extension or IVR configuration ready for production deployment.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/gitlab-installation-support/index.html

### GitLab — Installation | Hire Support

##### Support Overview
Hire GitLab Installation Support for secure self-hosted setup, server configuration, troubleshooting, runner installation, and repository management.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 2 Business Days (Fully Tested).
> Price
> $319 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> GitLab Installation Support for secure setup, configuration, troubleshooting, and repository management.
> Best for:
> Individuals, teams, and businesses requiring secure GitLab self-hosted setup or ongoing repository management support without a full-time hire.
> What you provide:
> Server root access or cloud access along with domain/DNS details ready for GitLab installation.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/localai-setup-support/index.html

### LocalAI — Self-Hosted LLM Setup | Hire Support

##### Support Overview
Get LocalAI Self-Hosted LLM setup to run open-source LLMs, vision, voice, and video engines locally on your existing hardware. Explore related enterprise AI solutions like ourOdysseus AI Servicesor train your team withOpenAI Developer Training.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 2 Business Days (Fully Tested).
> Price
> $169 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> LocalAI production setup for LLM deployment, vision, voice, and video engine setup on your existing hardware.
> Best for:
> Individuals, teams, and businesses requiring production LocalAI setup or ongoing self-hosted LLM support without a full-time hire.
> What you provide:
> Team access to your existing hardware/server, along with any model or configuration files ready for production deployment.
##### Scope of Deliverables
- LocalAI Core Installation:Deployment via Docker, Kubernetes, or native binary installation on Linux servers.
- GPU Acceleration & Driver Tuning:Configuration for NVIDIA CUDA, AMD ROCm, or Apple Silicon hardware acceleration.
- Model Gallery & REST API Setup:Configuration of OpenAI-compatible API endpoints for text generation, embeddings, audio (Whisper), and image generation.
- Security & Access Management:Secure reverse proxy setup (Nginx/Traefik) with SSL and API key authentication.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/centos-linux-support/index.html

### CentOS Linux — Support | Hire Support

##### Support Overview
Hire CentOS Linux Support for enterprise server setup, system administration, troubleshooting, performance optimization, and migration strategies. Explore our broaderLinux Server Supportofferings or review specializedUbuntu Linux Supportsolutions.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3 Business Days (Fully Tested).
> Price
> $321 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> CentOS Linux server setup, troubleshooting, security hardening, performance optimization, and system administration.
> Best for:
> Individuals, teams, and businesses requiring production CentOS Linux server setup or ongoing system administration support without a full-time hire.
> What you provide:
> Team access to your CentOS server/VPS, along with any existing configuration files ready for production deployment.
##### Scope of Deliverables
- Server Configuration & Maintenance:Setup and optimization of web servers (Apache, Nginx), database servers, and system services on CentOS.
- Security Hardening:Firewalld configuration, SELinux policy tuning, SSH port security, and automated security patching.
- EOL Migration Support:Smooth migration paths from legacy CentOS installations to Rocky Linux, AlmaLinux, or RHEL.
- Performance Optimization:Resource usage profiling, kernel parameter tuning, memory caching configuration, and disk I/O optimization.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/openai-platform-support/index.html

### OpenAI Platform — Support | Hire Support

##### Support Overview
Hire OpenAI Platform Support for API setup, custom agent integrations, vector store configuration, rate-limit troubleshooting, and production deployment. Looking to learn how to build OpenAI applications yourself? Explore ourOpenAI Developer Trainingprogram or check outOdysseus AI Support.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 1-2 Business Days (Fully Tested).
> Price
> $235 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> OpenAI Platform API setup, agent integrations, application troubleshooting, and production deployment configuration.
> Best for:
> Individuals, teams, and businesses requiring production OpenAI Platform integration or ongoing AI infrastructure support without a full-time hire.
> What you provide:
> Team access to your OpenAI account/API keys and server/VPS, along with any existing application code ready for production deployment.
##### Scope of Deliverables
- API & SDK Configuration:Secure integration of OpenAI Node.js/Python SDKs, environment variable protection, and key management.
- Assistants & Vector Stores:Building custom Assistants API workflows, file search tool configuration, and RAG vector store setup.
- Function Calling & Structured Outputs:Configuring JSON schema validation, multi-step tool calls, and model response structuring.
- Reliability & Scalability:Exponential backoff retry strategies, rate-limit quota handling, and serverless background execution.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/jasmin-sms-gateway-setup/index.html

### Jasmin SMS Gateway — Setup | Hire Support

##### Support Overview
Hire Jasmin SMS Gateway Setup support for SMPP connections, message routing, REST APIs, delivery reports, and enterprise SMS integration. Want to learn custom SMS gateway development? Explore ourTelnyx Developer Trainingprogram or check outTelnyx SIP Trunking Support.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3 Business Days (Fully Tested).
> Price
> $599 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Jasmin SMS Gateway setup covering SMPP connections, routing rules, API configuration, and delivery report handling.
> Best for:
> Individuals, teams, and businesses requiring production Jasmin SMS Gateway setup or ongoing enterprise SMS infrastructure support without a full-time hire.
> What you provide:
> Team access to your server/VPS and SMPP connector credentials, along with any existing routing configuration ready for production deployment.
##### Scope of Deliverables
- Gateway Installation & Messaging Queue:Deployment of Jasmin SMS Gateway, Redis caching, and RabbitMQ message broker integration.
- SMPP Connector Configuration:SMPP Client (SMPPc) and SMPP Server (SMPPs) setup for upstream telco aggregators and downstream clients.
- Routing & Filter Setup:Advanced MO/MT routing rules, static/dynamic filters, and failover connector logic.
- HTTP API & Interceptors:REST/HTTP API configuration for message submission, delivery receipt (DLR) webhooks, and Python interceptor scripting.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/goautodial-voip-setup/index.html

### GOAutoDial VoIP Setup & Configuration | Hire Support

##### Support Overview
Hire GOAutoDial VoIP Setup support for SIP trunks, outbound dialers, call routing, IVR, and call center integrations. Looking to master open-source VoIP administration? Learn more about ourFusionPBX VoIP Trainingor explore ourTelnyx SIP Trunking Support.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3 Business Days (Fully Tested).
> Price
> $525 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> GOAutoDial VoIP setup covering SIP configuration, dialer setup, call routing, IVR, and call center integration.
> Best for:
> Individuals, teams, and businesses requiring production GOAutoDial VoIP setup or ongoing call center infrastructure support without a full-time hire.
> What you provide:
> Team access to your server/VPS and SIP trunk credentials, along with any existing dialer or IVR configuration ready for production deployment.
##### Scope of Deliverables
- Server Deployment:Clean installation of GOAutoDial v4, Asterisk core configuration, and web interface security hardening.
- Trunking & Routing:Inbound/Outbound carrier SIP trunk setup, dial plan creation, and CID spoof protection.
- Campaign & Dialer Setup:Predictive, ratio, and manual campaign configurations, lead list management, and custom disposition rules.
- Agent Portal & WebRTC:WebRTC softphone configuration, agent interface setup, dynamic script creation, and live monitoring dashboards.
##### Frequently Asked Questions
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/zeroclaw-setup-support/index.html

### ZeroClaw Setup Support | Hire Self-Hosted AI Agent Setup

##### Support Overview
Hire ZeroClaw self-hosted AI agent setup for autonomous server tasks, workflow automation, chat operations, & local LLM integration. Looking to master self-hosted AI architecture yourself? Explore ourZeroClaw Hands-on Trainingor learn about dedicatedHermes Agent Support.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 2 Business Days (Fully Tested).
> Price
> $166 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Comprehensive ZeroClaw engineering covering personal AI runtime deployment, secure multi-LLM API routing, and low-latency language model configuration.
> Best for:
> Individuals, teams, and businesses requiring production ZeroClaw setup or ongoing personal AI runtime support without a full-time hire.
> What you provide:
> Team access to your server/VPS and API keys, along with any existing routing configuration ready for production deployment.
##### Scope of Deliverables
- Environment & Container Setup:Production deployment of ZeroClaw runtime, dependency optimization, and daemon service configuration.
- LLM Engine & API Routing:Configuration for local LLM runtimes (Ollama/LocalAI) and external cloud provider API key fallbacks.
- Tooling & Action Execution:Secure sandboxing for autonomous system command execution, filesystem hooks, and channel integrations.
- Security & Access Control:Token authentication setup, process isolation, environment variable protection, and system monitoring.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/linux-server-support/index.html

### Linux Server Support | Hire Expert SysAdmin

##### Support Overview
Hire expert Linux Server Support from School of Freelancing for server setup, security, migration, deployment, troubleshooting, monitoring, and optimization—get reliable technical expertise without the cost of a full-time SysAdmin. Interested in mastering enterprise administration yourself? Check out ourLinux Freelancing Trainingor dedicatedUbuntu Linux Support.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 3 Business Days (Fully Tested).
> Price
> $399 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Comprehensive Linux server engineering covering app deployment, configuration, migration, Linux server hardening, monitoring, and troubleshooting.
> Best for:
> Individuals, teams, and businesses requiring urgent Linux server troubleshooting or ongoing infrastructure support without a full-time hire.
> What you provide:
> Team access to your Linux server/VPS, along with the domain and application files ready for production deployment.
##### Scope of Deliverables
- Server Security & Hardening:SSH key authentication, UFW/iptables firewall configuration, Fail2ban integration, and kernel patch management.
- Web Server Setup & Tuning:High-performance Nginx/Apache configuration, SSL/TLS certificate automation via Let's Encrypt, and HTTP/2-3 setup.
- Database Optimization:MySQL, PostgreSQL, and Redis installation, connection pooling, indexing, and automated backup schedules.
- Monitoring & Maintenance:Resource usage auditing (CPU/RAM/I/O), disk space alerts, systemd service management, and issue resolution.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/openclaw-setup-support/index.html

### OpenClaw Setup Support | Self-Hosted AI Infrastructure

##### Support Overview
Deploy an OpenClaw self-hosted AI assistant in a production environment to execute real computer tasks and run autonomous workflows across messaging platforms like Telegram, Discord, and WhatsApp. Want to manage and build autonomous agents on your own? Check out our hands-onOpenClaw Hands-on Trainingor explore ourZeroClaw Setup Support.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 2 Business Days (Fully Tested).
> Price
> $189 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> OpenClaw self-hosted AI full deployment, autonomous workflow configuration, and real computer task automation via chat apps.
> Best for:
> Individuals, teams, and businesses requiring production OpenClaw setup or ongoing self-hosted AI automation support without a full-time hire.
> What you provide:
> Team access to your hardware/server and chat app credentials, along with any existing workflow files ready for production deployment.
##### Scope of Deliverables
- OpenClaw Installation & Runtime Config:Full setup of OpenClaw agent environment on bare-metal servers, VPS, or local Linux workstations.
- Chat Application Integrations:Secure connections to Telegram, WhatsApp, Discord, or custom webhooks for remote command execution.
- Task Automation & Tools Setup:Configuring computer interaction drivers, local file systems access, bash tool bindings, and web browsing automation.
- Security & Privilege Hardening:Implementing strict command permission boundaries, sandboxing execution environments, and SSL/TLS API encryption.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /client-support/telnyx-sms-setup/index.html

### Telnyx SMS Setup Support | Business Messaging Integration

##### Support Overview
Hire Telnyx SMS Setup support for messaging APIs, webhooks, phone numbers, and business SMS integration. We configure complete Telnyx portal environments, Messaging Profiles, and outbound/inbound REST API integrations for high-deliverability enterprise communication. Looking to learn how to build Telnyx integrations on your own? Explore ourTelnyx Developer Trainingor check ourTelnyx SIP Trunking Support.

##### Key Takeaways
> Aspect
> Detail
> Turnaround:
> 1-2 Weeks (Fully Tested).
> Price
> $985 (One-Time Fixed Investment).
> Format:
> Live Remote Support, Worldwide.
> Covers:
> Telnyx SMS setup covering messaging API configuration, webhooks, phone number provisioning, and business SMS integration.
> Best for:
> Individuals, teams, and businesses requiring production Telnyx SMS setup or ongoing business messaging support without a full-time hire.
> What you provide:
> Team access to your Telnyx account and server/VPS, along with any existing messaging or webhook configuration ready for production deployment.
##### Scope of Deliverables
- Account & API Configuration:Creation and secure management of Telnyx API keys, Messaging Profiles, and portal organization settings.
- Webhook & Application Handlers:End-to-end setup of inbound SMS webhook URLs, delivery status callbacks, and retry logic on your server infrastructure.
- Number Provisioning & 10DLC Alignment:Purchasing local or toll-free numbers, attaching them to Messaging Profiles, and assisting with 10DLC brand/campaign registration.
- End-to-End Delivery Testing:Comprehensive inbound and outbound SMS/MMS testing, latency validation, and webhook signature verification.
##### Hire Your Support Now
Book a free 10-minute consultation to scope your project.


---

## /.well-known/security.txt

### security.txt


---

## /about-us/index.html

### About Us | School Of Freelancing

##### Why We're Obsessed WithLinux
Linux powers most servers, cloud platforms, and DevOps pipelines.
                  We put that power and its income in your hands.

##### Our Mission
To democratize Linux and AI skills worldwide,
                    turning technical training into freelance income
                    and robust business infrastructure solutions.

We deliver on this through two pillars:

- Freelancing Training:Master Linux, AI, DevOps, VoIP, SMS and cloud automation
                      to secure high-paying clients on Upwork, Fiverr, and Toptal.
- Client Support:Direct expert assistance for business VPS setup,
                      server hardening, migrations, and 24/7 troubleshooting.
##### Our Vision
To power the global freelance economy through Linux and AI
                    literacy while eliminating business revenue loss from server downtime.

Concretely, we're working toward a future where:

- Any motivated beginner, regardless of location, degree,
                      or background, can become a confident, employable Linux freelancer.

---

## /contact-us/index.html

### Contact Us | School Of Freelancing

##### Get in Touch
##### Send a message
This opens WhatsApp with your message pre-filled — just hit send there to reach us.

##### Find Us on the Map

---

## /locations/index.html

### Global Linux & AI Training & Support | Locations

##### Don't See Your Country?
Message us to schedule a time that works for your time zone.


---

## /locations/en-be/index.html

### Freelance Training and IT Services | Belgium

##### Dedicated to Belgium
##### Freelancing Training
Timezone-aligned freelance training for professionals in Belgium. Master Linux, DevOps, VoIP, and AI-platform skills live instructor-led, then apply them in the freelance marketplace.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for Belgian businesses. Fast, secure Linux, cloud, VoIP, and AI-platform support under strict SLA terms.

View Business Services →

##### Belgium's Freelance & IT Market
Belgium's ICT sector contributes over 4% of GDP, and self-employment covers roughly 15.6% of the workforce (18.1% in Brussels). Independent IT consultants typically bill €50–90/hour, reflecting steady demand for multilingual technical talent in Brussels, Antwerp, and beyond.

##### Why Professionals & Businesses in Belgium Choose Us
- Local Market Expertise:Training informed by Belgium's own ICT and freelance market data, helping you position for the demand that's actually there.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in Brussels, Antwerp, and other major hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET and CEST).
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-no/index.html

### Norway Freelance Training and IT Services

##### Dedicated to Norway
##### Freelancing Training
Top-rated remote freelance training for Norwegian citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Norwegian Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Norwegian citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Norwegian tech hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET/CEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-fi/index.html

### Finland Freelance Training and IT Services

##### Dedicated to Finns
##### Freelancing Training
Top-rated remote freelance training for Finnish citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Finnish Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Finnish citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Finnish metro hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (EET and EEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-dk/index.html

### Denmark Freelance Training and IT Services

##### Dedicated to Denmark
##### Freelancing Training
Timezone-aligned freelance training for professionals in Denmark. Master Linux, DevOps, VoIP, and AI-platform skills live instructor-led, then apply them in the freelance marketplace.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for Danish businesses. Fast, secure Linux, cloud, VoIP, and AI-platform support under strict SLA terms.

View Business Services →

##### Denmark's Freelance & IT Market
Danish freelancers typically register a sole proprietorship (enkeltmandsvirksomhed) with Erhvervsstyrelsen via virk.dk, receiving a CVR number for invoicing. VAT (moms) applies at 25% once annual turnover passes DKK 50,000, with tax settled through 10 monthly B-tax instalments.

##### Why Professionals & Businesses in Denmark Choose Us
- Local Market Expertise:Training informed by Denmark's own freelance registration, VAT, and tax rules, so you know what to expect from day one.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in Copenhagen, Aarhus, and other major hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET and CEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-us/index.html

### United States Freelance Training & IT Support | School of Freelancing

##### Dedicated to the United States
##### Freelancing Training
US Timezone-aligned freelancing training. Master Linux, DevOps, VoIP, and AI platforms with live instructor guidance, then apply your skills directly in the global freelance market.

Explore Freelancing Programs →

##### Client Support
Remote enterprise client support for US businesses. Fast, secure Linux server setup, cloud engineering, VoIP integrations, and custom AI platform management.

View Business Services →

##### Why US Students & Businesses Choose Us
- US Timezone Alignment:All live sessions, consultations, and technical support windows are flexibly scheduled across EST, CST, MST, and PST.
- High-Value Technical Skills:Hands-on training focusing on in-demand infrastructure tech like Linux server administration, Docker, FusionPBX, Telnyx, and AI agents.
- Enterprise Support SLAs:Dedicated infrastructure troubleshooting, server security hardening, and proactive system maintenance for US businesses.
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-ch/index.html

### Freelance Training and IT Services | Switzerland

##### Dedicated to the Swiss
##### Freelancing Training
Top-rated remote freelance training for Swiss citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Swiss Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Swiss citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Swiss metro hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET and CEST).
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-is/index.html

### Iceland Freelance Training and IT Services

##### Dedicated to Iceland
##### Freelancing Training
Top-rated remote freelance training for Icelandic citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Icelandic Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Icelandic citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Icelandic tech hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (GMT).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-ie/index.html

### Ireland Freelance Training and IT Services

##### Dedicated to the Irish
##### Freelancing Training
Top-rated remote freelance training for Irish citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Irish Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Irish citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Irish metro hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (GMT and IST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-il/index.html

### Israel Freelance Training and IT Services

##### Dedicated to Israel
##### Freelancing Training
Top-rated remote freelance training for Israeli citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Israeli Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Israeli citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Israeli tech hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (IDT and IST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-sg/index.html

### Singapore Freelance Training & IT Services | School of Freelancing

##### Dedicated to Singapore
##### Freelancing Training
Top-rated remote freelance training for Singapore citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Singapore Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Singapore citizens secure premium, high-paying remote contracts across global and regional markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients across Singapore's thriving tech ecosystems.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (SGT).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-bd/index.html

### Freelance Training and IT Services | Bangladesh

##### Dedicated to Bangladeshis
##### Freelancing Training
Top-rated remote freelance training for Bangladeshi citizens, delivered by our home-country team. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Bangladeshi Citizens & Businesses Choose Us
- Home-Country Expertise:Founded and headquartered in Bangladesh, giving us firsthand knowledge of the local freelance and remote-tech landscape.
- Citizenship-Focused Training:A tailored curriculum designed to help Bangladeshi citizens secure premium, high-paying remote contracts across global and domestic markets.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within Bangladesh Standard Time (BST).
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-ca/index.html

### Freelance Training and IT Services | Canada

##### Dedicated to Canadians
##### Freelancing Training
Top-rated remote freelance training for Canadian citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Canadian Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Canadian citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Canadian metro hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (Pacific, Mountain, Central, and Eastern).
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-gb/index.html

### United Kingdom Freelance Training and IT Services

##### Dedicated to the British
##### Freelancing Training
Top-rated remote freelance training for British citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why British Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help British citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major UK metro hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (GMT and BST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-li/index.html

### Liechtenstein Freelance Training and IT Services

##### Dedicated to Liechtenstein
##### Freelancing Training
Top-rated remote freelance training for Liechtenstein citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Liechtenstein Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Liechtenstein citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Liechtenstein tech hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET/CEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-lu/index.html

### Luxembourg Freelance Training and IT Services

##### Dedicated to Luxembourg
##### Freelancing Training
Top-rated remote freelance training for Luxembourg citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Luxembourg Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Luxembourg citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Luxembourg tech hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET/CEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-at/index.html

### Austria — Freelance Training and IT Services

##### Dedicated to Austrians
##### Freelancing Training
Top-rated remote freelance training for Austrian citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Austrian Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Austrian citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Austrian metro hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET and CEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-de/index.html

### Germany Freelance Training and IT Services

##### Dedicated to Germans
##### Freelancing Training
Top-rated remote freelance training for German citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why German Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help German citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major German metro hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET and CEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-se/index.html

### Sweden Freelance Training and IT Services

##### Dedicated to Sweden
##### Freelancing Training
Top-rated remote freelance training for Swedish citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Swedish Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Swedish citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Swedish tech hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET/CEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-nl/index.html

### Netherlands Freelance Training and IT Services

##### Dedicated to Netherlands
##### Freelancing Training
Top-rated remote freelance training for Dutch citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Dutch Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Dutch citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Dutch tech hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (CET/CEST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /locations/en-au/index.html

### AU Freelance Training and IT Services

##### Dedicated to Aussies
##### Freelancing Training
Top-rated remote freelance training for Australian citizens. Master Linux, DevOps, VoIP, and AI agent building through live, timezone-aligned classes.

Explore Freelancing Programs →

##### Business IT Services
Enterprise-grade remote IT support for local businesses. We proactively manage your Linux, Cloud, VoIP, and AI infrastructure under strict SLA terms.

View Business Services →

##### Why Australian Citizens & Businesses Choose Us
- Citizenship-Focused Training:A tailored curriculum designed to help Australian citizens secure premium, high-paying remote contracts across global and domestic markets.
- Commercial Business Support:Specialized IT infrastructure troubleshooting, server hardening, and maintenance for corporate clients in all major Australian metro hubs.
- 100% Timezone Aligned:Every live class, technical audit, and critical support window operates natively within your local business hours (AEST, ACST, and AWST).
##### Frequently Asked Questions
##### Ready for a freelance career or secure tech support?
Book a free 10-minute consultation to scope your training or tech support.


---

## /freelancing-training/index.html

### Freelancing Training — School Of Freelancing

##### All Training Programs
##### Linux Freelancing Training
Become an in-demand Linux system administrator, build a freelance business, and win high-paying global clients.

Linux Training Features:

- 90 Hands-on Training Sessions
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Hermes Agent Freelancing Training
Build an in-demand freelance career as a Hermes AI Agent Engineer and attract premium global projects.

Hermes Agent Training Features:

- 20 Hands-on Training Sessions
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Telnyx SMS API Freelancing Training
Learn Telnyx — the most in-demand messaging skill in the freelance market — and attract premium global clients now!

Telnyx SMS Training Features:

- 30 Hands-on Training Sessions
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Odysseus AI Freelancing Training
Set up Odysseus on Linux, optimize AI synergy, and build service portfolios across marketplaces.

Odysseus Training Features:

- 20 Hands-on Training Sessions
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Service Portfolio Development
- Credential Verification Support
##### OpenClaw Freelancing Training
Learn to deploy OpenClaw Linux servers for AI agents, build your service portfolio, and get hired freelance.

OpenClaw Training Features:

- 20 Hands-on Training Sessions
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### LocalAI Freelancing Training
Learn how to deploy LocalAI production to run AI models directly on your own device or local server instead of a remote cloud.

LocalAI Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Service Portfolio Development
- Credential Verification Support
##### ZeroClaw Freelancing Training
A hands-on training covering ZeroClaw fundamentals, production deployment, and building a profitable service around it.

ZeroClaw Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Service Portfolio Development
- Credential Verification Support
##### GitLab Freelancing Training
Learn GitLab production setup, migration, version control, CI/CD, & project management to secure freelance jobs.

GitLab Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### GitHub Freelancing Training
Learn GitHub Enterprise Server deployment, Actions CI/CD, migration, and building a profitable freelance service.

GitHub Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Docker Freelancing Training
Hands-on Docker training covering three production deployments, building a freelance service, and client acquisition.

Docker Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### FusionPBX Freelancing Training
Learn FusionPBX VoIP deployment, advanced configuration, and call routing, then build a profitable freelance service.

FusionPBX Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### GOautodial Freelancing Training
Learn GOautodial Freelancing Training for VoIP setup, call testing, freelance portfolio creation, and landing clients.

Goautodial Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Call Center Freelancing Training
Learn enterprise call center setup, for SIP trunking, IVR, predictive dialers, and CRM integration, to work as a freelancer.

Call Center Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Ubuntu Linux Freelancing Training
Learn Ubuntu Linux: setup web servers, CRMs & harden security. Build a portfolio for freelance clients for Ubuntu support.

Ubuntu Linux Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Debian Linux Freelancing Training
Learn Debian Linux admin: Set up LEMP, deploy Vtiger/Odoo/Attendize, fix errors, build portfolio & land clients.

Debian Linux Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### CentOS Linux Freelancing Training
Learn CentOS Linux admin — set up LEMP stacks, deploy Django, Hadoop, MEAN, Next.js, troubleshoot, and land clients.

CentOS Linux Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### OpenAI Freelancing Training
OpenAI Developer Training: Build real-world AI applications, then find and apply for freelance jobs on Upwork.

OpenAI Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Claude Freelancing Training
Learn Claude API & AI agent engineering — prompt engineering, tool use, RAG, agent orchestration. Land freelance clients.

Claude Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Twilio SMS API Freelancing Training
Learn Twilio SMS API setup, integration, automation, troubleshooting, and real-world freelancing skills.

Twilio Training Features:

- 30 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Jasmin SMS Gateway Freelancing Training
Learn Jasmin SMS Gateway — deploy bulk SMS on Ubuntu, integrate SMPP/HTTP APIs, troubleshoot, land freelance clients.

Jasmin SMS Gateway Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support
##### Bulk SMS Freelancing Training
Build bulk SMS systems with SMS APIs — automate CSV messaging, deploy production workflows, land freelance clients.

Bulk SMS Freelancing Training Features:

- 20 Comprehensive Modules
- No Pre-Recorded Training Videos
- Live Online, Instructor-Led Training
- Guaranteed Minimum Income (GMI)*
- Credential Verification Support

---

## /freelancing-training/hermes-agent-training/index.html

### Hermes Agent — Freelancing Training

##### Overview
Master production deployment of Hermes Agent and package your technical setup into high-demand freelance services. Learn proven client acquisition strategies across Upwork, Freelancer, Guru, LinkedIn, and YouTube to land global remote contracts.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $149 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Deploy Hermes Agents into production to offer freelance services and land clients through Upwork, Guru, Freelancer, LinkedIn, and YouTube.
> Best for:
> The ultimate Hermes Agent training designed to help developers, freelancers, and agency owners master high-demand AI skills and sign premium global clients.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in live, self-hosted Hermes Agent deployment

Marketplace portfolio proving real support and Freelance-ready AI agent skills

Stronger habits for deploying, troubleshooting, and reviewing Hermes Agent projects

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Server & DNS Foundations
> DigitalOcean droplet setup, SSH keys, domain DNS configuration
> 2
> Linux Security Hardening
> Ubuntu server hardening, UFW firewall configuration, user roles
> 3
> Web Server Setup
> Nginx reverse proxy installation, basic server block configs
> 4
> Domain SSL Security
> Certbot / Let's Encrypt SSL setup, HTTPS forcing, live-check testing
> 5
> Hermes Agent Installation
> Source/Docker installation, .env file configuration, API key setup
> Two
> 6
> AI Engine Integration
> Connecting Hermes Agent to Ollama local models & cloud LLM APIs
> 7
> Core Features Setup
> Configuring Skills, persistent Memory, and MCP server integrations
> 8
> Daemonization
> systemd service setup, process management, auto-restart policies
> 9
> Production Hardening
> Fail2ban installation, automated backup scripts, log management
> 10
> Bot Integrations
> Telegram & Discord bot connection, webhook configurations, cron jobs
> Three
> 11
> Advanced Automations
> Building custom tools, workflow pipelines, live agent testing
> 12
> Portfolio Repository Build
> Structuring a public GitHub repository to showcase production work
> 13
> Service Packaging
> Defining Hermes Agent freelance packages, scope, pricing models
> 14
> Upwork Profile Setup
> Writing high-converting Upwork profiles, bio, portfolio link setup
> 15
> Freelancer Marketplace Profiles
> Setting up Guru, Freelancer.com, alternative platform profiles
> Four
> 16
> Content Strategy
> Creating 5 Hermes Agent service showcase videos for marketing
> 17
> Social Lead Generation
> Crafting LinkedIn content, social post templates, direct outreach
> 18
> Bidding & Proposal Mastery
> Search filters, proposal writing, fast-apply bidding strategy
> 19
> Client Onboarding & Delivery
> Scope-setting, client communication, milestone delivery, invoicing
> 20
> Capstone Review & Live Q&A
> Real client troubleshooting scenario, collect testimonials, program wrap-up
##### Secure Your Seat Now

---

## /freelancing-training/claude-training/index.html

### Claude AI - Freelancing Training | School of Freelancing

##### Overview
Learn Anthropic Claude API & AI agent engineering — prompt engineering, tool use, RAG, multi-agent orchestration. Build a portfolio to land direct and marketplace freelance clients.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Live interactive training sessions completed over 1 Month.
> Price:
> $185 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Interactive Training with Zero Pre-Recorded Videos.
> Covers:
> Anthropic Messages API setup, XML Tag Prompting, Tool Use, Computer Use Agents, Extended Thinking Mode, Vision API, RAG Architecture, Multi-Agent Orchestration, Upwork/Freelancer/Guru profile setup, YouTube Proof of work (PoW) videos, and Client Outreach.
> Best for:
> AI Engineers, Software Developers, Technical Freelancers, Automation Experts, & IT Consultants.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to submit client proposals.
##### Participation Requirements:
##### Training Prerequisites
- ActiveClaude Platform Account& API Key.
- Commitment:Full dedication to complete 20 hands-on sessions over 30 days.
##### Connectivity
- Messaging apps for real-time mentor guidance and technical support.
- High-speed internet connection for live terminal streaming and agent testing.
##### Training Rules
- Our standardTraining Rulesapply to maintain high accountability, rapid project execution, and skill verification.
##### You'll leave with:
Complete engineering capability in building Claude API integrations, Computer Use automations, tool-calling bots, and multi-agent orchestrations.

Published service listings on Upwork, Freelancer.com, and Guru.com verified by public YouTube Proof of Work (PoW) video demonstrations.

Proven proposal strategies and direct outreach tactics to secure high-paying AI agency contracts and enterprise retainer clients.

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Anthropic Platform & Messages API Setup
> Setting up Anthropic Console, managing API keys, rate limits, model selection (Claude 3.5 Sonnet, Haiku), and SDK initialization
> 2
> Anthropic Prompt Engineering & XML Structuring
> Mastering XML tag formatting (`<instructions>`, `<context>`), system prompts, role definition, and Anthropic prompt evaluation techniques
> 3
> Claude Tool Use (Function Calling) Foundations
> Defining strict JSON schema tool specifications, parsing `tool_use` blocks, and wiring external APIs to Claude responses
> 4
> Advanced Multi-Tool Execution Workflows
> Handling parallel tool calls, custom error outputs back to Claude, loop control, and token-efficient tool response formatting
> 5
> Troubleshooting Tool Execution & Rate Limit Errors
> Fixing tool-call loop bugs, handling 429 rate limits, context budget exhaustion, and strict schema validation errors
> Two
> 6
> Claude Computer Use API Architecture
> Configuring desktop environment containers, screen coordinate capture, mouse/keyboard primitives, and Computer Use tool integration
> 7
> Troubleshooting Computer Use Automation Errors
> Debugging GUI coordinate mismatches, action execution timeouts, visual state verification, and display resolution scaling issues
> 8
> Extended Thinking Mode & Complex Reasoning
> Implementing Claude's Extended Thinking parameter, managing thinking budget tokens, and evaluating complex step-by-step logic outputs
> 9
> Troubleshooting Extended Thinking Bottlenecks
> Optimizing thinking token limits, resolving budget overflow errors, handling output timeouts, and formatting final responses
> 10
> Claude Vision API & Document Processing
> Processing multi-page PDFs, complex UI mockups, chart interpretation, and visual dataset parsing using Claude Vision capabilities
> Three
> 11
> RAG Knowledge Bases with Claude API
> Integrating vector storage engines, semantic search retrieval, document chunking, and strict ground-truth verification using Claude
> 12
> Troubleshooting RAG & Context Hallucinations
> Fixing vector search inaccuracies, context window degradation, grounding prompts, and hallucination suppression techniques
> 13
> Multi-Agent Systems & Agentic Orchestration
> Designing orchestrator-worker architectures, inter-agent delegation, shared state management, and multi-step task execution
> 14
> Upwork Specialized Profile & AI Project Catalogs
> Building specialized profiles for Claude API Engineers, defining fixed-price scope deliverables, and publishing custom AI agent catalogs
> 15
> Freelancer.com AI Service Setup
> Structuring Claude tool use and automation service packages, creating architecture blueprints, and standardizing pricing tiers
> Four
> 16
> Guru.com Service Publishing & Contracts
> Creating specialized AI integration gigs on Guru.com, defining contract milestone structures, and crafting service agreements
> 17
> YouTube Proof of Work (PoW) Video Production
> Recording step-by-step video demonstrations of live Claude Computer Use setups, tool integrations, and agent workflows as PoW
> 18
> YouTube SEO & Client Lead Generation
> Optimizing PoW videos for high-converting client keywords (e.g., "Automate Desktop Workflows with Claude Computer Use"), with CTA links
> 19
> Marketplace Proposal Bidding & Client Copywriting
> Drafting winning technical proposals on Upwork, Freelancer, and Guru embedding PoW video proof to win diagnostic and setup jobs
> 20
> Direct Outbound Client Outreach & Monthly Retainers
> Executing direct outreach (LinkedIn/Email) to founders and closing ongoing $1,000–$3,000/month Claude AI development retainers
##### Secure Your Seat Now

---

## /freelancing-training/twilio-sms-api-training/index.html

### Twilio SMS — Freelancing Training

##### Overview
Learn Twilio SMS API setup, integration, automation, troubleshooting, and real-world freelancing skills through hands-on project-based training.

##### Training Features:
> Aspect
> Detail
> Duration:
> 30 Hours of Intensive Training under one month duration.
> Price:
> $811 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Twilio Programmable SMS API, TwiML, Webhooks, Messaging Services, A2P 10DLC Compliance, API Troubleshooting, Upwork Profile Optimization, Proposal Writing, and Client Project Delivery.
> Best for:
> Full-Stack Developers, Web Developers, Automation Engineers, Freelancers, & System Integrators.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- Twilio Verified Account,Any Domain, & Linux Server
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Complete technical mastery of Twilio Programmable SMS API setup, webhooks, TwiML, Messaging Services, and A2P 10DLC carrier compliance.

Advanced troubleshooting capabilities for API errors, signature validation issues, webhooks, and deliverability monitoring.

A client-ready freelancing portfolio and Upwork acquisition strategy designed to land recurring high-paying SMS integration gigs.

##### Training Modules
> Week
> Session
> Topic
> Content
> Week 1
> 1
> Twilio Architecture & Account Setup
> Console navigation, Account SID/Auth Token security, API key management, and SDK installation based on Twilio official docs.
> 2
> Phone Number Provisioning & Capabilities
> Purchasing 10DLC local, Toll-Free, and Alphanumeric Sender IDs while evaluating capability flags via REST API.
> 3
> Outbound Programmable SMS API
> Constructing HTTP POST requests to the Messages resource, setting body payloads, senders, and parsing API responses.
> 4
> Status Callbacks & Delivery Tracking
> Configuring message status callbacks (`sent`, `delivered`, `failed`, `undelivered`) and logging delivery status lifecycle.
> 5
> Inbound SMS & Webhook Fundamentals
> Building server HTTP endpoints (Node.js/Python), processing incoming SMS payloads, and mapping URL parameters.
> 6
> TwiML Messaging Responses
> Drafting valid TwiML XML schemas using<Response>and<Message>tags to return automated, dynamic replies.
> 7
> A2P 10DLC & Carrier Compliance Setup
> Registering Brands and Campaigns with TCR via Twilio Console/API, managing opt-in requirements, and avoiding carrier spam blocks.
> Week 2
> 8
> Twilio Messaging Services & Copilot
> Creating Messaging Services, sender pool aggregation, sticky sender configuration, and geomatching logic.
> 9
> Two-Way SMS Auto-Responders
> Architecting stateful two-way conversational bots using backend databases and keyword parsing algorithms.
> 10
> Two-Factor Authentication (Twilio Verify)
> Implementing secure OTP verification flows via Twilio Verify API with custom code lengths and expiration controls.
> 11
> Bulk SMS Scheduling & Rate Limiting
> Building queued bulk dispatch engines, managing per-second throughput limits, and preventing API rate-limit exceptions.
> 12
> Media Messaging (MMS API) Integration
> Handling outgoing media attachments, validating MIME types, and capturing inbound image/video URLs via webhooks.
> 13
> Webhooks via Serverless & Functions
> Deploying lightweight API backends using Twilio Serverless Functions and Assets directly from the Twilio CLI.
> 14
> Twilio Studio Visual SMS Workflows
> Designing automated visual messaging flows, conditional logic branches, HTTP request widgets, and CRM sync.
> Week 3
> 15
> Webhook Security & Signature Validation
> Securing endpoints by verifying `X-Twilio-Signature` HTTP headers against auth tokens to prevent request spoofing.
> 16
> Debugging API Errors & Debugger Logs
> Diagnosing common Twilio error codes (e.g., 21211, 21614, 30007), using the Twilio Alerting API and Debugger logs.
> 17
> Local Webhook Testing with Ngrok
> Setting up Ngrok tunnels, inspecting raw HTTP headers/bodies, and local endpoint debugging during live development.
> 18
> GSM-7, UCS-2 & Multi-Part SMS Optimization
> Analyzing message segment calculations, character set conversions, UDH headers, and optimizing SMS billing costs.
> 19
> Opt-Out & Compliance Filtering Automation
> Handling mandatory STOP, START, and HELP keywords, maintaining global suppression databases, and SHAFT compliance.
> 20
> Hands-On Project 1: Appointment Reminder System
> Building a complete scheduled SMS reminder integration with webhooks, status callbacks, and Google/Outlook Calendar sync.
> 21
> Hands-On Project 2: Interactive SMS Survey Bot
> Building a multi-question, state-managed SMS survey bot with real-time response database logging and analytics.
> Week 4
> 22
> Upwork Profile Optimization for Twilio Devs
> Crafting high-converting profile titles, specialized profiles, and skills tags tailored specifically to Twilio SMS integration.
> 23
> Packaging Upwork Project Catalogs
> Structuring fixed-price offer packages (e.g., "Twilio 10DLC Registration", "Twilio SMS Verification Setup") on Upwork.
> 24
> Building a Client-Ready Technical Portfolio
> Setting up GitHub code repositories, architecture diagrams, and live demo endpoints to showcase to prospective clients.
> 25
> Upwork Job Lead Qualification & Filtering
> Identifying high-value Twilio job postings on Upwork, auditing client history/hire rates, and spotting red-flag projects.
> 26
> Winning Proposal Copywriting for Twilio Gigs
> Drafting technical proposals featuring clear solution architectures, step-by-step implementation plans, and demo links.
> 27
> Creating Video Proof-of-Work Demos
> Recording clear Loom video walkthroughs of your working SMS projects to attach directly to Upwork proposals.
> 28
> Client Technical Discovery & Project Estimation
> Conducting discovery calls, estimating API usage costs for clients, and establishing milestone-based project scopes.
> 29
> Safe Client Account Handoff & Credential Security
> Managing client subaccounts, API credentials, and production deployments securely without exposing private keys.
> 30
> Closing Contracts & Scaling to Monthly Retainers
> Converting one-off Twilio API setups into recurring monthly system monitoring, maintenance, and support retainers.
##### Secure Your Seat Now

---

## /freelancing-training/odysseus-ai-training/index.html

### Odysseus AI — Freelancing Training

##### Overview
Learn Odysseus AI for real-world freelancing, including AI agent setup, automation, Linux deployment, troubleshooting, and client-ready solutions, so you can confidently deliver projects and win paid AI freelancing work.

##### Training Features:
> Aspect
> Detail
> Price:
> $121 (One-Time Investment / Lifetime Value).
> Duration:
> 20 Hands-on intensive sessions across 2 weeks.
> Format:
> 100% Live, Instructor-Led Training — No Pre-Recorded Videos.
> Covers:
> Production deployment of a Self-Hosted AI Workspace; strategies to secure premium clients on Upwork, Freelancer, Guru, LinkedIn, and YouTube.
> Best for:
> Aspiring freelancers and IT pros looking to master privacy-first, self-hosted AI infrastructure and build a high-income freelance business.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,a domain or subdomain, and verified freelance marketplace profiles.
- Rigorous format:Requires absolute patience and deep focus during live sessions.
##### Connectivity
- Mobile messaging device for continuous, client-ready communication.
- Stable fiber-optic internet connection to prevent live session interruptions.
##### Training Rules
- TheseRulesapply to all trainees. They keep our sessions fair, focused, and highly productive. Terms may update as the program evolves.
##### You'll leave with:
Deep hands-on experience deploying a live, privacy-first, self-hosted Odysseus AI Workspace.

A robust client portfolio proving real production deployment and data-privacy engineering expertise.

Production-grade habits for server hardening, routine maintenance, and workspace troubleshooting.

##### Training Modules
> Session
> Topic
> Content
> 1
> VPS Provisioning & DNS
> Deploy DigitalOcean droplet, set up A/AAAA DNS records, initial server login
> 2
> Linux Server Hardening
> Configure SSH keys, disable root password login, set up UFW firewall
> 3
> NGINX Installation & Setup
> Install NGINX web server, construct custom virtual host block, set proxy parameters
> 4
> SSL & Domain Live-Check
> Issue Certbot/Let's Encrypt SSL certificates, enforce HTTPS redirect, run live check
> 5
> Core Dependency & DB Setup
> Provision databases, configure local storage directories, set up environment paths
> 6
> Odysseus AI Production Install
> Deploy Odysseus AI Workspace, build initial environment configs, create admin account
> 7
> Access Control & Permissions
> Setup user roles, configure workspace isolation, test multi-tenant access levels
> 8
> Privacy Architecture
> Implement data isolation policies, configure secure local storage encryption rules
> 9
> System Intrusion Prevention
> Configure Fail2ban rules, protect API routes, implement rate limiting
> 10
> Backups & System Monitoring
> Set up automated database/file backups, configure log rotation and system monitoring
> 11
> Maintenance & Update Workflows
> Execute safe application update routines, health check scripts, and rollbacks
> 12
> Client Support & Monitoring
> Setup uptime monitoring alerts, build routine maintenance checklists for clients
> 13
> Portfolio Deployment
> Publish a live public demo instance of Odysseus AI for client viewings
> 14
> Code Repository & Proof of Work
> Structure and publish custom deployment scripts to a public GitHub repository
> 15
> Profile Optimization
> Build high-converting profiles on Upwork, Guru, and Freelancer with optimized bios
> 16
> Service Pricing Strategy
> Map out fixed-rate setup vs. recurring monthly maintenance service tiers
> 17
> Content & Demo Video Creation
> Record and produce 5 targeted Odysseus AI Workspace service feature demo videos
> 18
> Social Marketing Strategy
> Build outbound LinkedIn post templates and social outreach content strategies
> 19
> Job Filtering & Proposal Writing
> Master search filters, write winning proposals, submit live client applications
> 20
> Onboarding, Invoicing & Capstone
> Client onboarding workflows, invoicing/withdrawals, testimonial capture & capstone Q&A
##### Secure Your Seat Now

---

## /freelancing-training/openclaw-training/index.html

### OpenClaw — Freelancing Training

##### Overview
You'll become a production-ready OpenClaw specialist with a live, working deployment of a 24/7 autonomous AI agent proving real hands-on skills. Earn via freelance gigs, direct client contracts, or supporting businesses that want an always-on digital assistant of their own.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $129 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Deploy OpenClaw into production to offer freelance services and land clients through Upwork, Guru, Freelancer, LinkedIn, and YouTube.
> Best for:
> The ultimate OpenClaw Freelancing Training designed to help developers, freelancers, and agency owners master high-demand AI skills and sign premium global clients.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience deploying and configuring a live, production-grade OpenClaw agent

Marketplace portfolio proving real deployment, troubleshooting, and client-support skills

Stronger habits for configuring, maintaining, and troubleshooting autonomous AI agents under real workloads

##### Training Modules
> Session
> Topic
> Content
> 1
> OpenClaw Fundamentals & Architecture
> Core concepts, agent architecture, components, real-world use cases
> 2
> Environment Setup & Installation
> Server/environment preparation, OpenClaw installation, initial configuration
> 3
> Production Deployment & Configuration
> Deploying for live workloads, integrations, access & security basics
> 4
> Troubleshooting & Client Maintenance
> Common deployment issues, logs & diagnostics, updates, ongoing support routine
> 5
> Freelance Launch: Marketplace & Delivery
> Upwork/Guru/Freelancer profiles, 5 service videos, LinkedIn marketing, job search & bidding, client communication, delivery, capstone review
##### Secure Your Seat Now

---

## /freelancing-training/linux-freelancing-training/index.html

### Linux — Freelancing Training | School Of Freelancing

##### Overview
Learn Linux system administration for real-world freelancing, including server deployment, hardening, troubleshooting, automation, and client-ready solutions, so you can confidently deliver projects and win paid Linux freelancing work.

##### Training Features:
> Aspect
> Detail
> Price:
> $599 (One-Time Investment / Lifetime Value).
> Duration:
> 90 Hands-on intensive sessions across 6 months.
> Format:
> 100% Live, Instructor-Led Training — No Pre-Recorded Videos.
> Covers:
> Production deployment of real-world Linux server projects; strategies to secure premium clients on Upwork, Freelancer, Guru, LinkedIn, and YouTube.
> Best for:
> Beginner-friendly for learners comfortable with any operating system, focused on hands-on, real-world, project-based Linux system administration.
> (GMI)*:
> Guaranteed Minimum Income secured only with 100% training attendance and active marketplace engagement (purchasing bids/connects to apply for jobs).
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,a domain or subdomain, and verified freelance marketplace profiles.
- Rigorous format:Requires absolute patience and deep focus during live sessions.
##### Connectivity
- Mobile messaging device for continuous, client-ready communication.
- Stable fiber-optic internet connection to prevent live session interruptions.
##### Training Rules
- TheseRulesapply to all trainees. They keep our sessions fair, focused, and highly productive. Terms may update as the program evolves.
##### You'll leave with:
Hands-on experience deploying, hardening, and maintaining live, production Linux server environments.

A robust client portfolio proving real production deployment and systems administration expertise.

Production-grade habits for server troubleshooting, routine maintenance, and client support.

##### Training Modules:
##### Secure Your Seat Now

---

## /freelancing-training/gitlab-training/index.html

### GitLab — Freelancing Training | Setup, CI/CD & Jobs

##### Overview
Learn GitLab production setup, migration, version control, CI/CD, & project management to secure freelance jobs.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $239 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Set up a production GitLab server to offer freelance services and land clients through Upwork, Guru, Freelancer, LinkedIn, and YouTube.
> Best for:
> The ultimate GitLab freelancing training designed to help developers, freelancers, and sysadmins master high-demand DevOps skills and sign premium global clients.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in live, self-hosted GitLab server deploy & manage.

Marketplace portfolio proving real GitLab migration, security, & CI/CD pipeline skills.

Stronger habits for deploying, troubleshooting, and managing enterprise GitLab.

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Server & DNS Foundations
> DigitalOcean droplet sizing for GitLab Omnibus, SSH keys, domain DNS setup
> 2
> Linux OS Hardening
> Ubuntu server security, UFW firewall configuration, swap space optimization
> 3
> GitLab Omnibus Installation
> Official repository setup, omnibus package installation, configuration tuning
> 4
> SSL & Domain Security
> Let's Encrypt integration, HTTPS redirection, custom domain binding
> 5
> GitLab Core Configuration
> Initial root setup, SMTP email configuration, security policy defaults
> Two
> 6
> GitLab Runner Architecture
> Installing & registering dedicated GitLab Runners on Linux droplets
> 7
> CI/CD Pipeline Fundamentals
> Writing custom `.gitlab-ci.yml` scripts, jobs, stages, & artifacts
> 8
> Docker & Container Registry
> Configuring built-in Container Registry, Docker-in-Docker (dind) builds
> 9
> Backups & Disaster Recovery
> Automating daily backups to AWS S3/Object Storage, restore procedures
> 10
> Server Security & Monitoring
> Fail2ban integration, SSH hardening, monitoring system metrics & logs
> Three
> 11
> GitHub to GitLab Migration
> Migrating repositories, issues, PRs, and permissions seamlessly
> 12
> Third-Party Integrations
> Slack/Discord webhooks, Jira integration, external auth (OAuth/LDAP)
> 13
> Portfolio Repository Build
> Structuring a public repository showcasing GitLab administration work
> 14
> Service Packaging & Pricing
> Defining GitLab setup, migration, and CI/CD maintenance service packages
> 15
> Upwork Profile Optimization
> Writing high-converting Upwork bios & setting up targeted portfolios
> Four
> 16
> Freelance Platform Profiles
> Optimizing profiles on Guru, Freelancer.com, and LinkedIn services
> 17
> Content Marketing Strategy
> Creating short video walkthroughs demonstrating GitLab technical expertise
> 18
> Proposal & Fast-Apply Strategy
> Targeting job posts, crafting proposals, and bidding strategy
> 19
> Client Onboarding & Delivery
> Project scoping, secure credential exchange, milestone delivery, invoicing
> 20
> Capstone Review & Live Q&A
> Simulated enterprise troubleshooting scenario, testimonial collection, wrap-up
##### Secure Your Seat Now

---

## /freelancing-training/telnyx-sms-api-training/index.html

### Telnyx — SMS API Freelancing Training

##### Overview
Learn to deploy a compliant 2-way bulk SMS system using the Telnyx Messaging API, Jasmin Gateway, playSMS, and RabbitMQ on DigitalOcean, then package that setup into high-demand freelance services for global clients.

##### Training Features:
> Aspect
> Detail
> Duration:
> 30 hours of hands-on training over one month.
> Price:
> $799 (One-Time Investment).
> Format:
> Online, Hands-On Training delivered across one month modules with a flexible schedule.
> Covers:
> Deploy a compliant 2-way bulk SMS system using Telnyx Messaging API, Jasmin Gateway, playSMS & RabbitMQ, and offer it as a freelance service.
> Best for:
> The ultimate Telnyx SMS API training designed to help developers and freelancers master compliant SMS infrastructure and sign premium global clients.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Ubuntu Linux Server, & a Telnyx account/domain for 10DLC registration.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### What You'll Learn:
Telnyx API fundamentals, authentication, and 10DLC carrier compliance

SMS gateway architecture, deployment, and two-way messaging with webhooks

Jasmin/playSMS integration, cost optimization, and post-installation support

##### Training Modules
> Week
> Session
> Topic
> Content
> Week 1
> 1
> Infrastructure Setup
> Provisioning Ubuntu Linux servers on DigitalOcean & SSH key configuration
> 2
> Linux Server Hardening
> Configuring UFW firewall, SSH hardening, and system security rules
> 3
> Domain & SSL Configuration
> DNS records mapping, Nginx reverse proxy installation, & Let's Encrypt SSL
> 4
> Compliance Foundations
> Deploying carrier-compliant Privacy Policy & Terms of Service pages
> 5
> Telnyx Brand Registration
> Registering Brands with The Campaign Registry (TCR) via Telnyx portal
> 6
> 10DLC Campaign Vetting
> Submitting 10DLC Use-Cases, vetting requirements, & compliance checks
> 7
> Hosted SMS Enablement
> Enabling Hosted SMS on existing landlines & LOA document management
> Week 2
> 8
> Sender ID Provisioning
> Purchasing 10DLC, Toll-Free, & Alphanumeric Sender IDs via Telnyx API
> 9
> playSMS Deployment
> Installing playSMS front-end environment, database creation, & basic setup
> 10
> Jasmin SMS Gateway Core
> Installing Jasmin SMS Gateway core packages & dependent internal services
> 11
> SMPP Bindings to Telnyx
> Configuring SMPP client connectors and active bindings to Telnyx SMSC
> 12
> Jasmin MT Router Setup
> Configuring Mobile Terminated (MT) routers & outbound message rules
> 13
> HTTP Connectors Config
> Setting up Jasmin HTTP connectors for application-layer API access
> 14
> REST API Direct Modules
> Constructing & testing REST Path modules for direct HTTP API payloads
> 15
> Gateway Architecture Review
> End-to-end outbound messaging test from playSMS/Jasmin to Telnyx API
> Week 3
> 16
> Inbound Webhook Profiles
> Configuring Telnyx Messaging Profiles & Webhook endpoints for MO traffic
> 17
> Real-Time Inbound Delivery
> Capturing inbound HTTP webhooks & parsing JSON payloads on backend
> 18
> SMPP to HTTP Packet Routing
> Routing SMPP packets into HTTP requests for playSMS Inbox processing
> 19
> 2-Way Messaging Testing
> Verifying real-time bidirectional SMS delivery between user and portal
> 20
> GSM-7 vs. UCS-2 Encoding
> Character set optimization, encoding conversion, & unit cost reduction
> 21
> Message Concatenation
> Managing UDH header parsing & multi-part long SMS message assembly
> 22
> Throughput & Rate Limiting
> Dynamic throughput throttling based on 10DLC & Toll-Free number caps
> 23
> Webhook Error Handling
> Handling retries, non-delivery status codes, and server response logs
> Week 4
> 24
> Message Queue Architecture
> Deploying RabbitMQ / AMQP message broker for high-volume SMS queues
> 25
> Carrier Opt-Out Management
> Implementing native STOP / UNSUBSCRIBE auto-replies & suppression lists
> 26
> DLR Tracking Dashboards
> Building real-time Delivery Receipt (DLR) tracking & status dashboards
> 27
> SHAFT Content Filtering
> Activating USA Compliance Shield & filtering SHAFT-violating content
> 28
> System Stress Testing
> Simulating bulk SMS message dispatches, concurrency tests, and queuing
> 29
> Production Launch Setup
> Deploying production-ready 2-way SMS Gateway system with SSL & backup
> 30
> Capstone Review & Client Docs
> System auditing, handoff document preparation, and final Q&A review
##### Secure Your Seat Now

---

## /freelancing-training/jasmin-sms-gateway-training/index.html

### Jasmin SMS Gateway — Freelancing Training

##### Overview
Learn Jasmin SMS Gateway — deploy bulk SMS on Ubuntu, integrate SMPP/HTTP APIs, troubleshoot delivery, land freelance clients.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hours of Intensive Training delivered across 2 Weeks.
> Price:
> $349 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training based directly on Official Jasmin Documentation.
> Covers:
> Jasmin Core Deployment, SMPP Connectors, HTTP API, Interceptors, AMQP/RabbitMQ Queues, Morouter/Mtrouter Rules, Redis Billing, & Freelance Client Onboarding.
> Best for:
> Linux Sysadmins, Telecom Engineers, Backend Developers, & Freelancers handling enterprise SMS infrastructure.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Ubuntu 24.04 LTS Linux, sub domain & SMPP/HTTP API.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### What You'll Learn:
Deploy, configure, and secure Jasmin SMS Gateway with RabbitMQ, Redis, and PostgreSQL backends on Ubuntu Linux.

Configure SMPP connectors, HTTP API endpoints, advanced MT/MO routing rules, and Python interceptors based on Jasmin docs.

Deliver end-to-end bulk SMS integrations for enterprise clients and monetize your expertise on top freelance platforms.

##### 20 Training Modules (2 Weeks Duration)
> Week
> Session
> Topic
> Content
> Week 1
> 1
> Jasmin Gateway Architecture & Ecosystem
> Understanding Jasmin architecture, Twisted framework, RabbitMQ AMQP messaging, and Redis database roles.
> 2
> Server Provisioning & Dependencies
> Setting up Ubuntu Server, installing Python dependencies, Redis Server, RabbitMQ broker, and system logs.
> 3
> Jasmin Core Installation & Configuration
> Installing Jasmin Gateway via pip/packages, configuring `jasmin.conf`, telnet management console (`jcli`), and systemd services.
> 4
> Jasmin CLI (`jcli`) & Security Hardening
> Navigating `jcli`, configuring telnet credentials, user/group privileges, firewall rules, and SSL configuration.
> 5
> SMPP Protocol Fundamentals & Bindings
> SMPP v3.4 specification, PDUs, Transmitter (TX), Receiver (RX), and Transceiver (TRX) binding configurations.
> 6
> Configuring SMPP Client Connectors (`smppcc`)
> Provisioning upstream SMSC connections via `smppccm`, parameters tuning, window size, and link monitoring.
> 7
> Managing SMPP Users & Credentials (`user`)
> Creating downstream client accounts via `userm`, credential provisioning, quota limits, and speed throughput caps.
> 8
> HTTP API Interface Configuration
> Setting up Jasmin HTTP API server (`/send`, `/balance`), URL parameter mapping, and basic auth security.
> 9
> Outbound Mobile Terminated (MT) Message Flow
> Testing outbound MT message submission through HTTP API and SMPP, inspecting log outputs and delivery status.
> 10
> Inbound Mobile Originated (MO) Webhook Setup
> Configuring HTTP connectors to forward incoming SMS (MO traffic) to external webhooks and client endpoints.
> Week 2
> 11
> MT Message Routing Engine (`mtrouter`)
> Configuring Mobile Terminated routers, Static/Default routes, Round-Robin, Failover, and Priority-based routing.
> 12
> MO Message Routing Engine (`morouter`)
> Building Mobile Originated routing rules based on Sender ID, Shortcodes, Destination Regex, and User ID filters.
> 13
> Filter Engine Implementation
> Creating reusable filters: `DestinationAddrFilter`, `SourceAddrFilter`, `ShortCodeFilter`, and `UserFilter`.
> 14
> Python Interceptors for Content & Compliance
> Writing Python scripts for message modification, DLR interceptors, blacklist enforcement, and SHAFT compliance filtering.
> 15
> Delivery Receipt (DLR) Tracking & Callbacks
> Processing incoming DLR PDUs, mapping message IDs, updating status tables, and sending HTTP DLR webhooks.
> 16
> RabbitMQ Queue Management & Rate Limiting
> Monitoring AMQP message queues, handling congestion, configuring retry policies, and tuning message throughput.
> 17
> Billing, Quotas & Redis Credit Management
> Setting up prepaid user balances, credit deduction hooks, dynamic rate limits, and Redis session tracking.
> 18
> High-Volume Load Testing & Benchmarking
> Simulating concurrent SMPP and HTTP message traffic, stress testing RabbitMQ queues, and log rotation setup.
> 19
> Hands-On Capstone Project: Enterprise Bulk Gateway
> Deploying a complete 2-way Jasmin SMS Gateway instance connected to SMPP/HTTP carriers with live client webhooks.
> 20
> Freelancing Strategy, Proposals & Client Delivery
> Packaging Jasmin setup services on Upwork/Freelancer, auditing client architectures, and securing monthly retainers.
##### Secure Your Seat Now

---

## /freelancing-training/ubuntu-linux-training/index.html

### Ubuntu Linux — Freelancing Training

##### Overview
Learn Ubuntu Linux admin: setup web servers, CRMs & harden security. Build a portfolio for freelance clients for Ubuntu support.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $165 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Ubuntu server setup, LAMP stack deployment & troubleshooting, WordPress, Drupal, & Laravel error diagnosis, hardening Ubuntu, marketplace portfolios (Upwork, Freelancer.com, Guru.com), YouTube video marketing, and direct B2B outreach.
> Best for:
> Aspiring SysAdmins, Web Developers, Freelancers, DevOps Enthusiasts, IT Support Technicians, & System Integrators.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Proven expertise to set up, secure, and troubleshoot production LAMP, WordPress, Drupal, and Laravel environments on Ubuntu Linux.

Active service offerings published on Upwork, Freelancer.com, and Guru.com backed by video case studies on YouTube.

Actionable client acquisition strategies to win marketplace projects and land direct high-paying retainers.

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Ubuntu Linux Server Hardening & SSH
> Deploying DigitalOcean Ubuntu droplets, user creation, SSH key setup, UFW firewall rules, and basic terminal management
> 2
> LAMP Stack Installation on Ubuntu
> Installing Apache web server, MySQL database server, and PHP extensions; configuring virtual hosts and SSL certificates
> 3
> LAMP Stack Advanced Troubleshooting
> Resolving Apache 500/502/503 errors, MySQL access denied & crash recovery, PHP memory limit errors, and permissions issues
> 4
> WordPress CMS Setup on LAMP
> Configuring MySQL databases, downloading WordPress core, setting file permissions (`www-data`), and Apache `.htaccess` rules
> 5
> WordPress Troubleshooting & Recovery
> Fixing White Screen of Death (WSOD), `Error Establishing a Database Connection`, plugin conflicts, and uploading limits
> Two
> 6
> Drupal CMS Setup on LAMP Stack
> Installing Drupal core dependencies, configuring Apache `mod_rewrite`, setting up trusted host patterns, and database connections
> 7
> Drupal Error Diagnosis & Optimization
> Resolving Drupal WSOD, Clean URLs issues, module dependency deadlocks, memory limit exhaustion, and OPCache tuning
> 8
> Laravel Framework Setup on LAMP
> Installing Composer, configuring NGINX/Apache document root to `/public`, `.env` configuration, and Artisan migration setup
> 9
> Laravel Application Troubleshooting
> Debugging 500 server errors, storage folder permission issues (`chmod`/`chown`), migration failures, and route caching bugs
> 10
> Server Monitoring, Log Analysis & Security
> Analyzing `/var/log/apache2/`, `/var/log/syslog`, configuring Fail2ban, automating MySQL backups, and system health checks
> Three
> 11
> Hardening Ubuntu
> Harden your Ubuntu systems according to Internet Security (CIS) standards automatically using Canonical's native Ubuntu Security Guide (USG)
> 12
> Upwork Service Portfolio & Catalog
> Building a specialized Upwork SysAdmin profile, publishing Project Catalogs for WordPress, Drupal, & Laravel server setups
> 13
> Freelancer.com Service Profile Setup
> Optimizing a Freelancer.com profile, listing core Linux & web stack troubleshooting services, and creating portfolio items
> 14
> Guru.com Profile & Milestone Setup
> Setting up a professional Guru.com profile, defining service scope agreements, diagnostic fees, and maintenance rates
> 15
> Cross-Platform Portfolio Synchronization
> Integrating verified architecture diagrams, before/after server logs, and live application links across all marketplace profiles
> Four
> 16
> YouTube Demonstration Video Production
> Recording step-by-step video tutorials demonstrating LAMP installation, WordPress recovery, and Laravel deployment tricks
> 17
> YouTube SEO & Lead Generation
> Publishing YouTube videos optimized for high-intent search terms (e.g., "Fix WordPress Database Error Ubuntu"), with CTA links
> 18
> Marketplace Bidding & Winning Proposals
> Writing customized proposals for Upwork/Freelancer/Guru job posts, offering quick server diagnostics to win contracts fast
> 19
> Direct Client Outreach Marketing
> Finding agency owners, SaaS founders, and e-commerce stores on LinkedIn/Cold Email for direct monthly SysAdmin retainers
> 20
> Client Offboarding, Maintenance & Retainers
> Establishing client handover procedures, secure credential sharing, securing 5-star feedback, and closing monthly retainers
##### Secure Your Seat Now

---

## /freelancing-training/goautodial-training/index.html

### GOautodial — Freelancing Training

##### Overview
Learn GOautodial call center deployment, predictive dialer setup, Asterisk/VICIdial integration, and carrier trunking, then turn that skill into a profitable freelance service with real client acquisition.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $549 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Learn GOautodial call center deployment, predictive dialer setup, carrier trunking, and WebRTC agent portal configuration, then build a profitable freelance service.
> Best for:
> Call Center Owners & Managers, Linux System Administrators & DevOps Engineers, Telemarketing & Outbound Sales Operations, Managed Service Providers, Enterprise Contact Centers.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in live GOautodial call center & predictive dialer deployment

Marketplace portfolio proving GOautodial setup, campaign config, carrier routing, and security.

Stronger habits for deploying, troubleshooting, and managing GOautodial contact center infrastructure

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Cloud Infrastructure & Linux Prerequisites
> Deploying DigitalOcean droplets, Linux server preparation, DNS domain mapping, SSH security, and initial system dependencies
> 2
> GOautodial Production Installation
> Installing GOautodial v4 core engine, Asterisk, VICIdial engine, Kamailio, and MariaDB database setup
> 3
> SSL Certificates & WebRTC Setup
> Configuring NGINX proxy, Let's Encrypt SSL certificates, HTTPS domain binding, and WebRTC phone browser engine
> 4
> SIP Carriers & Outbound Dial Plan
> Integrating SIP trunks (Telnyx, Twilio, VoIP.ms), configuring dial rules, custom caller ID setup, and route verification
> 5
> Agent & Admin User Provisioning
> Creating admin, supervisor, and agent accounts, softphone/WebRTC configuration, and permission group settings
> Two
> 6
> Outbound Campaigns & Predictive Dialing
> Configuring outbound campaigns, auto-dialer modes (Predictive, Ratio, Manual), drop percentage controls, and dial pacing
> 7
> Lead Management & List Uploading
> Building lead lists, CSV list parsing, field mapping, custom CRM data fields, DNC (Do Not Call) list management, and lead recycling
> 8
> Inbound DID Routing & IVR Queues
> Mapping inbound DIDs, designing IVR call menus, call queues, agent in-groups, and call transfer/park configurations
> 9
> Security Hardening & SIP Defense
> Protecting GOautodial against SIP brute-force attacks, Fail2ban integration, UFW firewall rules, and IP whitelist setup
> 10
> Database Optimization & Recovery
> Automating MariaDB/MySQL database backups, VICIdial log archiving, audio recording storage, and disaster recovery
> Three
> 11
> Freelancer Service & Technical Portfolio
> Structuring a professional GOautodial contact center consultant portfolio with technical architecture documentation
> 12
> Upwork Profile & Service Creation
> Creating targeted Upwork profile, specialized Call Center/VoIP engineer profile, and Project Catalog for GOautodial setups
> 13
> Freelancer.com Service & Portfolio
> Building a high-converting Freelancer.com profile, listing GOautodial deployment services, and portfolio showcases
> 14
> Guru.com Service & Profile Setup
> Establishing a complete Guru.com profile, service offerings, work agreement templates, and technical pricing tiers
> 15
> Cross-Platform Portfolio Integration
> Embedding live agent web portal demos, carrier configs, and setup documentation across Upwork, Freelancer.com, and Guru
> Four
> 16
> Service Video Content Creation
> Recording professional service video demonstrations of GOautodial campaign setup, agent dialing, and real-time reports
> 17
> YouTube Video Publishing & SEO
> Uploading demonstration videos to YouTube optimized with call center search tags, structured descriptions, and client CTA links
> 18
> Direct Client Outreach & Marketing
> Executing targeted LinkedIn direct outreach to call center managers and BPO owners needing GOautodial setup and support
> 19
> Marketplace Bidding & Proposal Strategy
> Crafting high-converting proposals, fast-response bidding techniques, and project scoping for call center job postings
> 20
> Client Onboarding, Handover & Support
> Managing client onboarding, secure carrier credential handoff, maintenance contracts, requesting 5-star reviews, and final Q&A
##### Secure Your Seat Now

---

## /freelancing-training/docker-training/index.html

### Docker Freelancing Training | Learn & Get Support

##### Overview
Comprehensive Docker Freelancing Training designed to take you from a Docker practitioner to a high-earning freelancer, then land freelance and direct clients with job-ready skills.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $159 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Set up a production Docker and Docker Compose application to offer freelance services and land clients through Upwork, Guru, Freelancer, LinkedIn, and YouTube.
> Best for:
> Freelancers, sysadmins, and DevOps engineers looking to master Docker and Docker Compose for offer high-demand Docker support service.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in live, Docker application deployment & administration

Marketplace portfolio proving Docker app deploy, migration, security, & CI/CD pipeline skills

Stronger habits for deploying, troubleshooting, and managing enterprise GitHub infrastructure

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Server & Container Fundamentals
> DigitalOcean droplet setup, SSH security, domain DNS setup, Docker & Docker Compose installation
> 2
> Application 1 Setup (WordPress Stack)
> Dockerizing WordPress with MySQL database, volume persistence, and environment variables
> 3
> Application 1 Production Hardening
> Configuring NGINX Reverse Proxy, Let's Encrypt SSL, and custom domain routing for WordPress
> 4
> Application 2 Setup (Node.js/Python App)
> Writing custom Dockerfiles, multi-stage builds, and connecting to a Redis/PostgreSQL container stack
> 5
> Application 2 Production Hardening
> Health checks, container auto-restarts, network isolation, and environment configuration
> Two
> 6
> Application 3 Setup (Full MERN Stack)
> Multi-container Docker Compose configuration featuring React frontend, Node backend, and MongoDB database
> 7
> Application 3 Production Hardening
> Securing full-stack deployments with SSL certificates, NGINX proxy, UFW firewall, and Fail2ban integration
> 8
> Production Optimization & Monitoring
> Optimizing Docker image sizes, log management, resource limits, and automated container backups
> 9
> GitHub & Docker Registry
> Pushing custom Docker images to Docker Hub & GitHub Container Registry with automated GitHub Actions
> 10
> Container Maintenance & Troubleshooting
> Live debugging, container log inspection, volume backups, and disaster recovery procedures
> Three
> 11
> Portfolio Repository Setup
> Structuring a public GitHub portfolio showcasing all 3 production Docker application deployment repositories
> 12
> Upwork Profile & Catalog Setup
> Creating optimized Upwork profiles and Project Catalog offerings for Docker Compose & container deployment services
> 13
> Freelancer.com Profile & Service
> Setting up Freelancer.com profile, service offerings, and portfolio showcases for container management
> 14
> Guru.com Profile & Service
> Building a high-converting Guru profile, service packages, and technical pricing tiers for Docker tasks
> 15
> Marketplace Portfolio Integration
> Embedding live application demos and repository links into Upwork, Freelancer.com, and Guru portfolio sections
> Four
> 16
> Video Content Creation
> Recording step-by-step walkthrough videos demonstrating live deployment of the 3 production Docker applications
> 17
> YouTube Optimization & Marketing
> Uploading service demonstration videos to YouTube with SEO title tags, descriptions, and direct booking CTA links
> 18
> Client Outreach & Service Marketing
> Executing LinkedIn direct outreach, target community marketing, and content sharing to capture direct clients
> 19
> Proposal & Bidding Strategy
> Crafting custom proposals, fast-apply bidding strategies, and project estimation for marketplace job posts
> 20
> Client Onboarding & Capstone
> Managing secure credential handoffs, project delivery, invoicing, client reviews, and final live Q&A
##### Secure Your Seat Now

---

## /freelancing-training/debian-linux-training/index.html

### Debian Linux - Freelancing Training | School of Freelancing

##### Overview
Learn Debian Linux admin — set up LEMP stacks, deploy Vtiger CRM, Odoo ERP & Attendize, troubleshoot LEMP stack errors, build portfolios, land clients.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $169 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Debian server setup, LEMP stack deployment with domains, LEMP stack error troubleshooting, Vtiger CRM, Odoo ERP & Attendize deployments and troubleshooting, portfolio creation on Upwork, Freelancer.com, and Guru.com, YouTube Proof of Work (PoW) video marketing, and client outreach.
> Best for:
> Aspiring SysAdmins, Web Developers, Freelancers, DevOps Enthusiasts, IT Support Technicians, & System Integrators.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Proven expertise to set up LEMP stacks with custom domains, and deploy & troubleshoot Vtiger CRM, Odoo ERP, and Attendize on Debian Linux.

Published service portfolios on Upwork, Freelancer.com, and Guru.com backed by Proof of Work (PoW) demonstration videos on YouTube.

Actionable client acquisition strategies to win marketplace projects and land direct high-paying corporate retainers.

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Debian Server Setup & Domain Configuration
> Deploying DigitalOcean Debian droplets, user creation, SSH hardening, UFW firewall rules, and configuring DNS A-records/domain mapping
> 2
> LEMP Stack Setup using Domain
> Installing NGINX, MariaDB/MySQL, and PHP-FPM on Debian; setting up domain-specific server blocks and SSL encryption via Let's Encrypt
> 3
> LEMP Stack Error Diagnosis & Resolution
> Resolving NGINX 502 Bad Gateway, 504 Gateway Timeout, PHP-FPM socket errors, MariaDB crash recovery, and file permission issues
> 4
> LAMP Stack Configuration on Debian
> Setting up Apache2, MariaDB, and PHP; managing virtual hosts, htaccess rules, and module management on Debian Linux
> 5
> Troubleshooting LAMP Stack Errors
> Debugging Apache 500 Internal Server Errors, MySQL access denied issues, memory limit exhaustion, and broken URL rewrites
> Two
> 6
> Vtiger CRM Setup on LAMP Stack
> Installing Vtiger CRM prerequisites, database setup, directory permissions, PHP setting tweaks (`max_execution_time`), and installation wizard
> 7
> Troubleshooting Vtiger CRM Errors
> Resolving blank screens, database connection drops, cron execution failures, mail server integration errors, and session timeouts
> 8
> Odoo ERP Setup on LAMP Stack
> Installing PostgreSQL, Python dependencies, Odoo ERP core packages, configuring systemd services, and reverse proxy setup
> 9
> Troubleshooting Odoo ERP Errors
> Fixing internal server 500 errors, database master password issues, longpolling/worker timeouts, and CSS/JS asset rendering failures
> 10
> Attendize Setup on LAMP Stack
> Deploying Attendize ticketing platform, Composer dependencies, `.env` file configuration, and database migrations
> Three
> 11
> Troubleshooting Attendize Errors
> Resolving Laravel-based Attendize 500 errors, storage folder permissions (`chmod`/`chown`), payment gateway integration bugs, and email notification fails
> 12
> Upwork Service Portfolio Setup
> Creating specialized Upwork profiles for Vtiger CRM, Odoo ERP, and Attendize setup/troubleshooting services; structuring project catalog items
> 13
> Freelancer.com Portfolio Setup
> Building a professional Freelancer.com profile, listing specialized Debian Linux & ERP/CRM services, and publishing portfolio showcase items
> 14
> Guru.com Portfolio & Milestone Setup
> Setting up a Guru.com profile, defining service scope agreements, diagnostic fees, and structured milestones for application setup
> 15
> Cross-Platform Portfolio Synchronization
> Consolidating active portfolio items across Upwork, Freelancer.com, and Guru.com with verified server screenshots and architecture workflows
> Four
> 16
> YouTube Proof of Work (PoW) Video Production
> Recording hands-on video demonstrations of LEMP stack setups, Vtiger CRM installations, and Odoo/Attendize troubleshooting as Proof of Work
> 17
> YouTube SEO & Lead Generation
> Optimizing YouTube videos for high-intent client search queries (e.g., "Fix Odoo 500 Internal Error Debian"), embedding booking links and portfolio CTAs
> 18
> Marketplace Proposal Bidding Strategies
> Crafting targeted proposals on Upwork, Freelancer.com, and Guru.com offering rapid ERP/CRM diagnostic audits to quickly convert leads
> 19
> Direct Client Outreach Marketing
> Identifying business owners, managers, and enterprise clients via LinkedIn and direct cold email outreach to sell custom Debian IT solutions
> 20
> Client Offboarding, Maintenance & Retainers
> Establishing client handover protocols, secure credentials transfer, securing 5-star marketplace reviews, and converting one-off setups into monthly retainers
##### Secure Your Seat Now

---

## /freelancing-training/openai-training/index.html

### OpenAI — Freelancing Training | API & AI Projects

##### Overview
Learn OpenAI API development — build GPT-powered apps, API integration, automate workflows, integrate AI tools. Build a portfolio to land direct and marketplace freelance clients.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Live interactive training sessions completed over 1 Month.
> Price:
> $179 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Interactive Training with Zero Pre-Recorded Videos.
> Covers:
> OpenAI API setup, Integration, System Prompt Engineering, Structured Outputs (JSON Schema), Assistants API, Function Calling, Vector Embeddings (RAG), Fine-Tuning, Realtime API, Autonomous Agents, Upwork/Freelancer/Guru profile services, YouTube PoW videos, and Client Outreach.
> Best for:
> AI Engineers, Software Developers, Technical Freelancers, Product Builders, & IT Consultants.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to submit client proposals.
##### Participation Requirements:
##### Training Prerequisites
- ActiveOpenAI Platform Account& API keys.
- Commitment:Full dedication to complete 20 hands-on sessions over 30 days.
##### Connectivity
- Messaging apps for real-time mentor guidance and client support.
- Stable high-speed internet for code streaming and API testing.
##### Training Rules
- Our standardTraining Rulesapply to maintain high accountability, rapid project delivery, and skill verification.
##### You'll leave with:
In-depth technical expertise to build end-to-end OpenAI API applications, autonomous agents, RAG pipelines, and fine-tuned domain models.

Live service offerings on Upwork, Freelancer.com, and Guru.com verified by public YouTube Proof of Work (PoW) video demonstrations.

Battle-tested client outreach frameworks to win high-ticket AI engineering contracts and ongoing enterprise monthly retainers.

##### 20-Session Training Syllabus (1 Month)
> Week
> Session
> Topic
> Content
> One
> 1
> OpenAI Developer Ecosystem & API Setup
> Setting up OpenAI API keys, workspace billing, rate limits, model parameters (GPT-4o, mini), and python/node SDK initialization
> 2
> Prompt Engineering & System Instructions
> Mastering zero-shot/few-shot prompts, context window management, system roles, and OpenAI Academy prompt evaluation frameworks
> 3
> Structured Outputs & JSON Schema Validation
> Implementing guaranteed Pydantic/JSON Schema responses using OpenAI Structured Outputs for robust API integration
> 4
> OpenAI Function Calling & Tool Use
> Connecting OpenAI models to external REST APIs, databases, and custom functions via structured tool definitions
> 5
> Troubleshooting API Rates, Tokens & Errors
> Handling 429 Rate Limit errors, exponential backoff strategies, token counting optimization (tiktoken), and API error handling
> Two
> 6
> OpenAI Assistants API Architecture
> Building stateful Assistants using Threads, Runs, Code Interpreter, and File Search vector stores for enterprise workflows
> 7
> Troubleshooting Assistants API & Run States
> Debugging run status stalls (`requires_action`, `failed`), handling tool outputs, and managing persistent thread storage
> 8
> Vector Embeddings & RAG Knowledge Bases
> Generating embeddings (`text-embedding-3`), building vector database pipelines (Pinecone/Chroma), and implementing Semantic Search
> 9
> Troubleshooting RAG & Context Retrieval Errors
> Fixing vector chunking flaws, hallucination errors, similarity score thresholds, and context window overflow in RAG pipelines
> 10
> Custom Model Fine-Tuning Pipeline
> Preparing jsonl datasets, running fine-tuning jobs on GPT-4o-mini, hyperparameter tuning, and evaluating custom model performance
> Three
> 11
> Troubleshooting Fine-Tuning & Data Quality Errors
> Debugging dataset validation errors, format mismatches, overfitting issues, and model deployment endpoint errors
> 12
> OpenAI Realtime API & Speech WebSockets
> Building low-latency speech-to-speech voice agents using the Realtime API, WebSockets, and Whisper integration
> 13
> Troubleshooting Realtime Voice & WebSocket Errors
> Resolving audio buffer latencies, WebSocket disconnects, echo feedback loops, and function calling interrupts in voice sessions
> 14
> Upwork AI Service Portfolio Publishing
> Setting up specialized Upwork profiles and Project Catalogs offering custom GPT development, RAG buildout, and API integration
> 15
> Freelancer.com AI Service Package Setup
> Structuring service offerings on Freelancer.com, attaching architecture diagrams, and setting diagnostic pricing
> Four
> 16
> Guru.com AI Service Setup & Milestones
> Publishing specialized OpenAI services on Guru.com, establishing fixed milestone deliverables, and structuring contracts
> 17
> YouTube Proof of Work (PoW) Recording
> Recording step-by-step video tutorials demonstrating live OpenAI API integrations, RAG pipelines, and custom agent builds as Proof of Work
> 18
> YouTube SEO & Client Lead Generation
> Optimizing PoW videos for client search intent (e.g., "Build Custom RAG for Enterprise Documents"), with direct booking call-to-actions
> 19
> Marketplace Proposal Bidding Strategies
> Writing high-converting technical proposals on Upwork, Freelancer, and Guru incorporating PoW demo links to close deals quickly
> 20
> Direct Client Outreach & Enterprise Retainers
> Executing outbound marketing to AI startups and business owners to land monthly $1,000–$3,000 AI development & maintenance retainers
##### Enroll in the OpenAI Freelancing Training

---

## /freelancing-training/bulk-sms-setup-training/index.html

### Bulk SMS - Setup Training | School of Freelancing

##### Overview
Learn how to build bulk SMS systems with SMS APIs — automate CSV messaging, deploy production workflows, land freelance clients.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-On Sessions delivered across two weeks.
> Price:
> $849 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Interactive Training with Practical Production Labs.
> Covers:
> How to build bulk SMS systems with SMS APIs — automate CSV messaging, deploy production workflows, land freelance clients.
> Best for:
> Backend Developers, Linux Administrators, Telecommunication Engineers, & Technical Freelancers.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Ubuntu Linux, sub domains & SMS API.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### What You'll Learn:
Learn how to build bulk SMS systems with SMS APIs and land freelance clients.

Automate custom CSV batch messaging, rate-limiting, queuing, and real-time webhook delivery tracking.

Package bulk messaging solutions into high-paying freelance offers on Upwork, Freelancer, and direct client outreach.

##### Training Modules
> Week
> Session
> Topic
> Content
> Week 1
> 1
> Bulk SMS Ecosystem & Protocols
> Understanding SMPP vs HTTP/REST APIs, SMSC architectures, Sender IDs, and regulatory compliance (10DLC, Toll-Free verification).
> 2
> SMS API Provider Setup & Webhooks
> Provisioning Telnyx & Twilio accounts, acquiring long codes/shortcodes, configuring API tokens, and incoming webhooks.
> 3
> Linux Environment & Worker Setup
> Configuring Ubuntu Server, installing Node.js/Python runtimes, Redis server, and setting up environment variables securely.
> 4
> REST API Message Dispatching
> Building programatic single and batch SMS dispatch scripts using official SDKs and standard HTTP clients.
> 5
> Handling Delivery Receipts (DLR)
> Designing incoming webhook listeners to track real-time message delivery statuses (queued, delivered, failed, undelivered).
> Week 2
> 6
> CSV Data Parsing & Sanitization
> Ingesting dynamic CSV/Excel files, cleaning E.164 phone numbers, validating carrier data, and handling variable substitution.
> 7
> High-Throughput Queue Management
> Implementing RabbitMQ/Redis (BullMQ) queues to handle large-scale CSV bulk broadcasts without hitting provider rate limits.
> 8
> Rate Limiting & Concurrency Control
> Configuring token bucket algorithms, managing MPS (Messages Per Second) restrictions, and multi-number pool rotation.
> 9
> Automated Retry & Failover Logic
> Designing intelligent retry engines for transient errors, carrier fallback routing, and dead-letter queue (DLQ) processing.
> 10
> Google Sheets & Webhook Integration
> Connecting bulk SMS engines with Google Sheets API and Zapier/Make for non-technical client campaign management.
> Week 3
> 11
> Jasmin SMS Gateway Overview & Deployment
> Installing Jasmin SMS Gateway on Ubuntu, configuring RabbitMQ message broker, and managingjcliconfiguration.
> 12
> SMPP Client Connectors (smppcc)
> Connecting Jasmin to upstream wholesale SMS aggregators using SMPP v3.4 binds (Transmitter/Receiver/Transceiver).
> 13
> HTTP API & User Quotas in Jasmin
> Configuring Jasmin HTTP API endpoints, setting up customer accounts, rate limits, and prepaid credit management.
> 14
> Database Logging & Analytics Dashboards
> Persisting message logs into PostgreSQL/MySQL, creating real-time delivery reports, and building client-facing dashboards.
> 15
> Production Hardening, SSL & Systemd
> Securing webhooks with HTTPS (Certbot/Nginx), setting up Systemd service daemons, log rotation, and system monitoring.
> Week 4
> 16
> Two-Way SMS & Auto-Responder Workflows
> Building interactive SMS bots, keyword-based auto-replies, and routing inbound SMS to customer support webhooks.
> 17
> End-to-End Production Stress Testing
> Simulating a 50,000-message CSV campaign, benchmark testing system performance, queue latency, and error tracking.
> 18
> Packaging Bulk SMS Freelance Services
> Defining high-demand freelance offers: custom bulk SMS dispatchers, Jasmin gateway setups, and Telnyx/Twilio integrations.
> 19
> Upwork & Marketplace Proposal Strategies
> Crafting winning proposals, setting project pricing (fixed-rate vs. retainers), and building a standout technical portfolio.
> 20
> Direct Client Outreach & Project Handover
> Finding direct clients on LinkedIn, delivering comprehensive documentation, automated deployment scripts, and ongoing support.
##### Secure Your Seat Now

---

## /freelancing-training/local-ai-training/index.html

### LocalAI — Freelancing Training | Deployment & AI Jobs

##### Overview
LocalAI Freelancing Training teaches you to run LLMs and AI agents locally for free. You will learn to build private RAG systems for clients and sell these high-paying setup services on platforms like Upwork and Fiverr.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 hours over 2 weeks.
> Price:
> $111 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Deploy LocalAI into production to offer freelance services and land clients through Upwork, Guru, Freelancer, LinkedIn, and YouTube.
> Best for:
> Freelancers and IT professionals who want to specialize in privacy-focused, self-hosted AI deployments and launch a freelance career around them.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in live, self-hosted LocalAI deployment

Marketplace portfolio proving real support and Freelance-ready LocalAI agent skills

Stronger habits for deploying, troubleshooting, and reviewing LocalAI projects

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> LocalAI Fundamentals
> What LocalAI is, the OpenAI-compatible API, why no GPU is needed
> 2
> Install & First API Call
> Docker/binary install on a Linux VPS, CLI basics, config files, model gallery — Lab: install and run your first prompt via the API
> 3
> LLM Backends
> Downloading and configuring LLM backends (llama.cpp-based, quantized GGUF)
> 4
> Prompting & Chat Endpoints
> Prompt templates, context size tuning, quantization tradeoffs, OpenAI-compatible chat endpoint — Lab: deploy a quantized LLM and query it via curl/Postman
> 5
> Image Generation
> Stable Diffusion-compatible backends for text-to-image generation
> Two
> 6
> Vision & Video Models
> Image captioning and analysis, video generation basics — Lab: generate images and captions through LocalAI's REST API
> 7
> Speech Models
> Speech-to-text and text-to-speech backends
> 8
> API Security & Client Integration
> Authentication, reverse proxy, SSL, integrating LocalAI into a client-facing app — Lab: wire up STT/TTS behind an SSL reverse proxy
> 9
> End-to-End Deployment
> Full task: fresh VPS → LocalAI install → multi-modal models → domain → SSL
> 10
> Marketplace Launch & Outreach
> Upwork/Freelancer/Guru profiles & portfolios, pricing, LinkedIn outreach — Final Assessment: submit 1 proposal + 1 outreach message (reviewed live)
##### Secure Your Seat Now
Select your preferred payment method below to complete enrollment ($111 USD):


---

## /freelancing-training/fusionpbx-training/index.html

### FusionPBX: Freelancing Training

##### Overview
Learn FusionPBX VoIP deployment, advanced configuration, and call-routing setup, then turn that skill into a profitable freelance service with real client acquisition.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $519 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Learn FusionPBX VoIP deployment, advanced configuration, and call routing, then build a profitable freelance service.
> Best for:
> VoIP Service Providers, Linux System Administrators & DevOps Engineers, Call Centers & Telemarketing Operations, Managed Service Providers, Enterprise & Large Organizations.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in live, FusionPBX VoIP deployment & administration

Marketplace portfolio proving FusionPBX VoIP setup, call test, migration and security.

Stronger habits for deploying, troubleshooting, and managing FusionPBX VoIP infrastructure

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Server & Cloud Infrastructure
> DigitalOcean droplet deployment, Linux server setup, domain DNS setup, SSH security, and firewall configuration
> 2
> FusionPBX Production Installation
> Installing FreeSWITCH and FusionPBX core on Debian/Ubuntu server infrastructure with PostgreSQL database setup
> 3
> SSL, Domain & GUI Hardening
> Configuring NGINX web server, Let's Encrypt SSL certificates, HTTPS domain routing, and web admin portal security
> 4
> SIP Trunking & Gateways
> Configuring external SIP gateways/trunks (Telnyx, Twilio, VoIP.ms) and setting up inbound/outbound call routing rules
> 5
> Extensions & Softphone Setup
> Creating SIP extensions, configuring softphones (Linphone/Zoiper) & IP phones, NAT traversal, and TLS/SRTP encryption
> Two
> 6
> Advanced Call Routing & IVR
> Designing Interactive Voice Response (IVR) menus, auto-attendants, ring groups, call queues, and voicemail-to-email
> 7
> Multi-Tenancy & Domain Setup
> Configuring multi-tenant FusionPBX architecture, tenant isolation, domain management, and custom branding
> 8
> Call Testing & Quality Verification
> Executing live inbound/outbound call testing, audio codec optimization, SIP packet inspection, and audio quality verification
> 9
> Security Hardening & Fail2ban
> Hardening FreeSWITCH/FusionPBX against SIP attacks, configuring Fail2ban, UFW rules, and SIP access control lists (ACL)
> 10
> Maintenance, Backups & Disaster Recovery
> Automating PostgreSQL database backups, FreeSWITCH config backups, log rotation, and emergency recovery procedures
> Three
> 11
> Freelancer Service & Portfolio Setup
> Structuring a professional FusionPBX VoIP engineer service portfolio with technical proof-of-work documentation
> 12
> Upwork Profile & Service Creation
> Creating targeted Upwork profile, specialized VoIP engineering profile, and Project Catalog for FusionPBX setup services
> 13
> Freelancer.com Service & Portfolio
> Building a high-converting Freelancer.com profile, listing FusionPBX VoIP deployment services, and portfolio showcases
> 14
> Guru.com Service & Profile Setup
> Establishing a complete Guru.com profile, service offerings, work agreement templates, and technical pricing tiers
> 15
> Cross-Platform Portfolio Integration
> Embedding live test call recordings, gateway configs, and setup documentation across Upwork, Freelancer.com, and Guru
> Four
> 16
> Service Video Content Creation
> Recording professional service video demonstrations of FusionPBX deployment, IVR menu configuration, and call testing
> 17
> YouTube Video Publishing & SEO
> Uploading demonstration videos to YouTube optimized with VoIP search tags, structured descriptions, and client CTA links
> 18
> Direct Client Outreach & Marketing
> Executing targeted LinkedIn direct outreach and community marketing to acquire clients needing FusionPBX VoIP support
> 19
> Marketplace Bidding & Proposal Strategy
> Crafting high-converting proposals, fast-response bidding techniques, and project scoping for VoIP job postings
> 20
> Client Onboarding, Handover & Support
> Managing client onboarding, secure SIP credential handoff, maintenance contracts, requesting 5-star reviews, and final Q&A
##### Secure Your Seat Now

---

## /freelancing-training/github-training/index.html

### GitHub Freelancing Training | Setup, CI/CD & Jobs

##### Overview
Learn GitHub production setup, migration, version control, CI/CD, & project management to secure freelance jobs.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $239 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Set up a production GitHub server to offer freelance services and land clients through Upwork, Guru, Freelancer, LinkedIn, and YouTube.
> Best for:
> Freelancers, sysadmins, and DevOps engineers looking to master self-hosted GitHub infrastructure and offer high-demand server management services.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in live, self-hosted GitHub server deployment & administration

Marketplace portfolio proving real GitHub migration, security, & CI/CD pipeline skills

Stronger habits for deploying, troubleshooting, and managing enterprise GitHub infrastructure

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Server & DNS Foundations
> DigitalOcean droplet setup, SSH keys, domain DNS configuration
> 2
> Linux OS Hardening
> Ubuntu server security, UFW firewall configuration, swap space optimization
> 3
> GitHub Omnibus Installation
> Official repository setup, omnibus package installation, configuration tuning
> 4
> SSL & Domain Security
> Let's Encrypt integration, HTTPS redirection, custom domain binding
> 5
> GitHub Core Configuration
> Initial root setup, SMTP email configuration, security policy defaults
> Two
> 6
> GitHub Runner Architecture
> Installing & registering dedicated GitHub Runners on Linux droplets
> 7
> CI/CD Pipeline Fundamentals
> Writing custom `.GitHub-ci.yml` scripts, jobs, stages, & artifacts
> 8
> Docker & Container Registry
> Configuring built-in Container Registry, Docker-in-Docker (dind) builds
> 9
> Backups & Disaster Recovery
> Automating daily backups to AWS S3/Object Storage, restore procedures
> 10
> Server Security & Monitoring
> Fail2ban integration, SSH hardening, monitoring system metrics & logs
> Three
> 11
> GitHub to GitHub Migration
> Migrating repositories, issues, PRs, and permissions seamlessly
> 12
> Third-Party Integrations
> Slack/Discord webhooks, Jira integration, external auth (OAuth/LDAP)
> 13
> Portfolio Repository Build
> Structuring a public repository showcasing GitHub administration work
> 14
> Service Packaging & Pricing
> Defining GitHub setup, migration, and CI/CD maintenance service packages
> 15
> Upwork Profile Optimization
> Writing high-converting Upwork bios & setting up targeted portfolios
> Four
> 16
> Freelance Platform Profiles
> Optimizing profiles on Guru, Freelancer.com, and LinkedIn services
> 17
> Content Marketing Strategy
> Creating short video walkthroughs demonstrating GitHub technical expertise
> 18
> Proposal & Fast-Apply Strategy
> Targeting job posts, crafting proposals, and bidding strategy
> 19
> Client Onboarding & Delivery
> Project scoping, secure credential exchange, milestone delivery, invoicing
> 20
> Capstone Review & Live Q&A
> Simulated enterprise troubleshooting scenario, testimonial collection, wrap-up
##### Secure Your Seat Now

---

## /freelancing-training/call-center-setup-training/index.html

### Call Center Setup Freelancing Training | School of Freelancing

##### Overview
Learn enterprise call center infrastructure deployment, predictive dialer setup, IVR call routing, SIP trunking integration, and CRM connectivity, then transform this high-demand technical expertise into a lucrative freelance business with real client acquisition.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $611 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Learn end-to-end call center architecture, auto-dialer engines, WebRTC agent portals, SIP trunking, call recording compliance, and client acquisition on freelance marketplaces.
> Best for:
> Call Center Managers & BPO Owners, Telephony Engineers, Linux Administrators, DevOps Professionals, IT Consultants & MSPs.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in building, scaling, and maintaining enterprise contact center architectures.

Marketplace portfolio demonstrating dialer deployment, IVR design, carrier setup, and security.

Proven techniques for onboarding call center clients, securing retainer contracts, and scaling services.

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> Cloud Telephony Infrastructure & Linux
> Deploying DigitalOcean droplets, OS hardening, DNS domain binding, SSH key authentication, and network pre-requisites
> 2
> Call Center Core Engine Installation
> Installing Asterisk engine, VICIdial/GOautodial cores, database schemas, and real-time telephony dependencies
> 3
> WebRTC Phone Engine & SSL Security
> Configuring NGINX reverse proxy, Let's Encrypt SSL certificates, WebRTC browser softphones, and HTTPS agent interface
> 4
> SIP Trunking & Carrier Integration
> Connecting wholesale SIP carriers (Telnyx, Twilio, VoIP.ms), outbound dial rules, caller ID spoofing defense, and route testing
> 5
> Agent & Supervisor Provisioning
> Creating user roles, agent groups, supervisor monitoring permissions, real-time status dashboards, and softphone provisioning
> Two
> 6
> Outbound Predictive Dialer Setup
> Configuring predictive, ratio, and power dialing campaigns, call pacing algorithms, and drop percentage management
> 7
> Lead List Management & CRM Sync
> Parsing and importing CSV lead sheets, custom lead fields, DNC (Do Not Call) list filtering, and CRM data webhooks
> 8
> Inbound DID Routing & IVR Systems
> Setting up inbound phone numbers (DIDs), multi-level IVR menus, queue algorithms, call transfers, and voicemail-to-email
> 9
> Security, Firewall & Anti-Fraud
> Securing SIP ports, Fail2ban brute-force protection, UFW firewall configuration, and call fraud prevention strategies
> 10
> Recording Storage & Disaster Recovery
> Automating daily database backups, audio recording compression/archiving to S3 storage, and quick server restoration
> Three
> 11
> Freelance Service Packaging
> Structuring high-value Call Center Setup & Maintenance service packages with clear technical deliverables
> 12
> Upwork Profile Optimization
> Building a specialized Upwork profile as a Call Center Architect & VoIP Specialist, and creating Project Catalog offerings
> 13
> Freelancer.com Profile Setup
> Crafting a high-converting Freelancer.com profile, listing call center setup services, and uploading technical portfolio items
> 14
> Guru.com Profile & Service Listing
> Setting up a professional Guru.com profile, defining service agreements, milestones, and technical consultation rates
> 15
> Cross-Platform Portfolio Showcase
> Integrating live agent portal demos, dialer architecture diagrams, and carrier setups across all freelance platforms
> Four
> 16
> Video Case Study & Demo Creation
> Recording professional screen demonstrations of live predictive dialing, IVR navigation, and real-time manager reporting
> 17
> YouTube Publishing & Telephony SEO
> Publishing YouTube video showcases optimized with target call center keywords, structured descriptions, and client booking links
> 18
> Direct B2B Outreach to Call Centers
> Running cold outreach campaigns on LinkedIn targeting BPO owners, telemarketing agencies, and customer support directors
> 19
> Winning Proposals & Scoping Projects
> Writing winning proposals for job posts, calculating dialer server specs, estimating minutes costs, and scoping client jobs
> 20
> Client Onboarding & Retainer Contracts
> Executing smooth handover protocols, credential delivery, ongoing monthly maintenance retainers, and securing 5-star reviews
##### Secure Your Seat Now

---

## /freelancing-training/centos-linux-training/index.html

### CentOS Linux - Freelancing Training | School of Freelancing

##### Overview
Learn CentOS Linux admin — set up LEMP stacks, deploy Django, Hadoop, MEAN & Next.js, troubleshoot errors, build portfolios, land clients.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 Hands-on training sessions over one month training.
> Price:
> $181 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> CentOS server setup, LEMP/LAMP stack deployment with custom domains, Python Django SSL integration, Apache Hadoop cluster setup, MEAN stack, Next.js deployments, error troubleshooting, portfolio publishing (Upwork, Freelancer.com, Guru.com), YouTube Proof of Work (PoW) video marketing, and client outreach.
> Best for:
> Aspiring SysAdmins, Web Developers, Freelancers, DevOps Enthusiasts, Data Engineers, & IT Support Technicians.
> (GMI)*:
> Guaranteed Minimum Income subject to 100% training attendance and purchasing marketplace bids/connects to apply for jobs.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Proven expertise to set up LEMP/LAMP stacks with custom domains, and deploy & troubleshoot Python Django, Apache Hadoop, MEAN stack, and Next.js on CentOS Linux.

Published service offerings on Upwork, Freelancer.com, and Guru.com backed by Proof of Work (PoW) demonstration videos on YouTube.

Actionable marketing and client acquisition strategies to land marketplace projects and direct enterprise SysAdmin retainers.

##### Training Modules
> Week
> Session
> Topic
> Content
> One
> 1
> CentOS Linux Server Hardening & Security
> Deploying DigitalOcean CentOS droplets, user creation, SSH key setup, firewalld rules, SELinux policies, and YUM/DNF package management
> 2
> LEMP Stack Setup using Domain on CentOS
> Installing NGINX, MariaDB, and PHP-FPM on CentOS; configuring domain server blocks and issuing Certbot SSL certificates
> 3
> LEMP Stack Error Diagnosis on CentOS
> Debugging NGINX 502/504 Gateway errors, PHP-FPM socket configuration bugs, MariaDB startup failures, and SELinux permission denials
> 4
> LAMP Stack Configuration on CentOS
> Installing Apache (httpd), MariaDB, and PHP; setting up VirtualHosts, htaccess directives, and firewall port bindings
> 5
> Troubleshooting LAMP Stack on CentOS
> Fixing Apache 500 Internal Server Errors, MariaDB access denied issues, PHP memory limit errors, and httpd vhost conflicts
> Two
> 6
> Python Django Setup on LAMP/LEMP with SSL
> Installing Python venv, Gunicorn, WSGI connectors, setting up Django apps under domain SSL, and configuring NGINX/Apache reverse proxy
> 7
> Troubleshooting Django Deployment Errors
> Resolving Gunicorn socket errors, `DisallowedHost` security exceptions, static file rendering failures (`collectstatic`), and migration bugs
> 8
> Apache Hadoop Cluster Setup on CentOS
> Installing OpenJDK, SSH passwordless auth, configuring Hadoop HDFS, YARN (`core-site.xml`, `hdfs-site.xml`), and single/multi-node cluster initialization
> 9
> Troubleshooting Apache Hadoop Errors
> Resolving HDFS SafeMode lockup, NameNode format bugs, DataNode connection timeouts, YARN resource manager leaks, and memory allocation errors
> 10
> MEAN Stack Setup on CentOS
> Installing MongoDB, Express.js, Angular CLI, and Node.js; configuring systemd services, PM2 process management, and MongoDB security
> Three
> 11
> Troubleshooting MEAN Stack Errors
> Debugging MongoDB connection string failures, CORS origin blocks, Angular build errors, PM2 crash loops, and Node.js memory leaks
> 12
> Next.js Framework Setup on CentOS
> Configuring Node.js runtime, building production Next.js SSR/SSG apps, PM2 daemon setup, and NGINX reverse proxy with domain SSL
> 13
> Troubleshooting Next.js Deployment Errors
> Resolving Next.js 502 Bad Gateway proxy errors, build hydration mismatches, environment variable leakage, and port conflict issues
> 14
> Upwork Service Portfolio Setup
> Creating specialized Upwork profiles and Project Catalogs showcasing Django, Hadoop, MEAN, and Next.js setups with proof visuals
> 15
> Freelancer.com Service Portfolio Setup
> Structuring Freelancer.com profile services, cataloging CentOS stack troubleshooting offerings, and embedding setup diagrams/screenshots
> Four
> 16
> Guru.com Service Portfolio & Milestone Setup
> Configuring Guru.com services, setting diagnostic rates, and building milestone packages for Hadoop, Django, and Node/Next deployments
> 17
> YouTube Proof of Work (PoW) Video Production
> Recording step-by-step video tutorials demonstrating live Django setups, Hadoop cluster fixes, and Next.js CentOS deployments as Proof of Work
> 18
> YouTube SEO & Lead Generation Marketing
> Publishing PoW videos targeting high-intent client search terms (e.g., "Fix Hadoop NameNode Error CentOS"), with call-to-action booking links
> 19
> Marketplace Proposal Bidding Strategies
> Writing custom proposals on Upwork, Freelancer.com, and Guru.com offering rapid server/stack diagnostics to convert clients quickly
> 20
> Direct Client Outreach Marketing & Retainers
> Executing direct B2B outreach (LinkedIn/Cold Email) to tech founders and closing ongoing monthly SysAdmin maintenance retainers
##### Secure Your Seat Now

---

## /freelancing-training/zeroclaw-training/index.html

### ZeroClaw — Freelancing Training

##### Overview
A hands-on Freelancing training covering ZeroClaw fundamentals, production deployment, and building a profitable service around it.

##### Training Features:
> Aspect
> Detail
> Duration:
> 20 hours over 2 weeks.
> Price:
> $115 (One-Time Investment).
> Format:
> Live Online, Instructor-Led Hands-On Training with Zero Pre-Recorded Videos.
> Covers:
> Deploy ZeroClaw into production to offer freelance services and land clients through Upwork, Guru, Freelancer, LinkedIn, and YouTube.
> Best for:
> Freelancers and IT professionals who want to specialize in high-performance ZeroClaw deployments and launch a freelance career around them.
##### Participation Requirements:
##### Training Prerequisites
- DigitalOcean account,Any Domain, & Verified Marketplace Profiles.
- Rigorous:Need to have patience and concentration during all training sessions.
##### Connectivity
- Portable messaging devices for 24/7 client communication.
- Reliable fiber-optic internet access for uninterruptible training sessions.
##### Training Rules
- TheseTraining Rulesapply to all School of Freelancing trainees. They keep training fair, focused, and productive and may be updated as the program evolves.
##### You'll leave with:
Hands-on experience in live, self-hosted ZeroClaw production deployment

Marketplace portfolio proving real support and Freelance-ready ZeroClaw integration skills

Stronger habits for deploying, troubleshooting, and managing ZeroClaw projects

##### Training Modules
> Week
> Session
> Topic
> Content
> Week 1
> 1
> VPS Provisioning & DNS
> Deploy DigitalOcean droplet, set up A/AAAA DNS records, initial server access
> 2
> Linux Server Hardening
> Configure SSH keys, disable root password login, set up UFW firewall rules
> 3
> Web Server Setup
> Install NGINX web server, construct virtual host block, set proxy rules
> 4
> SSL & Domain Security
> Issue Certbot / Let's Encrypt SSL certificates, enforce HTTPS redirects
> 5
> Core Environment Setup
> Install dependencies, configure database connections, set up environment paths
> 6
> ZeroClaw Installation
> Deploy ZeroClaw core instance, configure .env settings, set initial configs
> 7
> Access Control & Roles
> Configure user permissions, role-based access, workspace data isolation
> 8
> Daemonization & Systemd
> Configure systemd service files, set up auto-restart policies on server reboot
> 9
> Production Hardening
> Install Fail2ban intrusion protection, protect API endpoints, configure rate limits
> 10
> Automated Backups & Logs
> Create automated backup scripts, setup log rotation routines, system health monitoring
> Week 2
> 11
> Maintenance & Updates
> Execute safe ZeroClaw update workflows, system health check automation
> 12
> Client Support & Alerts
> Set up uptime monitoring services, build client-facing support routines
> 13
> Portfolio Live Deployment
> Publish a live public demo instance of ZeroClaw to showcase to clients
> 14
> GitHub Proof of Work
> Build and publish custom deployment scripts to a clean GitHub repository
> 15
> Marketplace Profile Setup
> Create high-converting profiles on Upwork, Guru, and Freelancer.com
> 16
> Service & Pricing Tiers
> Define fixed-rate ZeroClaw setups and recurring monthly maintenance packages
> 17
> Content & Video Marketing
> Record 5 targeted ZeroClaw service demo videos for marketing showcase
> 18
> Social Outreach Strategy
> Craft outbound LinkedIn post templates and direct client prospecting workflows
> 19
> Job Search & Proposals
> Master job filtering techniques, write winning proposals, submit live bids
> 20
> Onboarding & Capstone
> Client onboarding process, invoicing workflows, testimonial capture, capstone Q&A
##### Secure Your Seat Now

---
