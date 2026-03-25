const courseData = [
  {
    "week": 1,
    "title": "IAM Foundations & Active Directory — Part I",
    "theme": "Master core IAM concepts and build your foundational on-premise Active Directory lab.",
    "days": [
      {
        "day": 1,
        "title": "The Identity Layer: Core Concepts",
        "concepts": [
          {
            "heading": "What is IAM?",
            "body": "Identity and Access Management (IAM) is the discipline of ensuring the RIGHT entity has the RIGHT access to the RIGHT resources at the RIGHT time — and that every access event is recorded. It sits at the intersection of security, compliance, and operational efficiency. In enterprise environments, IAM is not a product — it is an architecture."
          },
          {
            "heading": "Authentication (AuthN) vs. Authorization (AuthZ)",
            "body": "Authentication answers: WHO ARE YOU? It verifies identity through credentials — passwords, certificates, biometrics, or tokens. Authorization answers: WHAT CAN YOU DO? It governs what resources an authenticated identity can access and what actions they can perform. Conflating the two is one of the most common conceptual errors in IAM work. Remember: you can be authenticated but not authorized."
          },
          {
            "heading": "Key Identity Concepts",
            "body": "• Principal: Any entity that can request access — a human user, service account, application, or AI agent.\n• Credential: Proof of identity (password, certificate, API key, token).\n• Session: A time-bounded authenticated context.\n• Identity Provider (IdP): The authoritative source that issues and manages identities (e.g., Azure AD, Okta, Active Directory).\n• Service Provider (SP): The application or resource being accessed.\n• Directory: A structured database of identity objects (users, groups, computers). Active Directory, LDAP, and Azure AD are all directories."
          },
          {
            "heading": "Single Sign-On (SSO)",
            "body": "SSO allows a user to authenticate once and access multiple systems without re-entering credentials. The IdP authenticates the user and issues tokens or assertions that SPs honour. This improves user experience and — critically — centralises authentication, which makes monitoring and revocation far more effective. Without SSO, a leaver's access across 30 SaaS tools must be revoked in 30 separate places. With SSO, revoke access at the IdP and all downstream access is cut simultaneously."
          },
          {
            "heading": "Multi-Factor Authentication (MFA)",
            "body": "MFA requires two or more of: something you KNOW (password/PIN), something you HAVE (phone/hardware token), something you ARE (biometric). MFA defeats credential-stuffing and phishing attacks that only harvest passwords. Microsoft reports MFA blocks over 99.9% of automated account compromise attacks. In modern IAM, MFA is not optional — it is baseline hygiene."
          },
          {
            "heading": "The Principle of Least Privilege (PoLP)",
            "body": "Grant only the minimum permissions necessary for an entity to perform its function — nothing more. This limits blast radius when accounts are compromised. It applies equally to human users, service accounts, and AI agents. Implementing PoLP requires understanding what access is actually needed (often less than users request) and regularly reviewing whether access granted is still appropriate."
          }
        ],
        "lab": {
          "title": "Set Up Your Documentation System",
          "steps": [
            "Install Obsidian (free, local-first) from obsidian.md, OR create a free Notion account at notion.so",
            "Create a top-level folder/page called 'IAM Mastery Journey'",
            "Create sub-pages: Concepts Glossary | Lab Notes | Portfolio Projects | Interview Prep | Resources",
            "In your Concepts Glossary, write definitions in YOUR OWN WORDS for: Authentication, Authorization, SSO, MFA, Least Privilege, Principal, IdP, SP",
            "This documentation habit is not optional — it becomes your portfolio. Employers can see a GitHub repo; they cannot see notes you never published.",
            "BONUS: Create a free GitHub account at github.com and a public repository named 'iam-mastery-journey'. Push your notes there over the 12 weeks."
          ]
        },
        "resources": [
          {
            "label": "Microsoft: What is IAM?",
            "url": "https://www.microsoft.com/en-us/security/business/security-101/what-is-identity-access-management-iam"
          },
          {
            "label": "NIST Glossary of Identity Terms",
            "url": "https://csrc.nist.gov/glossary"
          },
          {
            "label": "YouTube: IAM Concepts in 10 Minutes (search: 'NetworkChuck IAM')",
            "url": "#"
          }
        ],
        "quiz": [
          "What is the difference between authentication and authorization? Give a real-world analogy.",
          "A user logs into Salesforce using their Google account. Which is the IdP and which is the SP?",
          "Why does SSO improve security rather than weaken it (hint: think about offboarding)?",
          "Name three factors that can be used in MFA and give one example of each.",
          "A developer requests admin access to a production database 'just in case.' What IAM principle does this violate?"
        ]
      },
      {
        "day": 2,
        "title": "Access Control Models: RBAC, ABAC & Least Privilege in Practice",
        "concepts": [
          {
            "heading": "Role-Based Access Control (RBAC)",
            "body": "RBAC assigns permissions to roles, and roles to users. A 'Sales Representative' role might have access to CRM data. A 'Finance Analyst' role has access to financial reporting. Users accumulate access by being members of roles, not by having permissions assigned directly. RBAC is the most widely deployed model in enterprise IAM. Its strength is simplicity and auditability — you can tell exactly what a role permits. Its weakness is role explosion: large organisations often end up with hundreds of roles, many overlapping."
          },
          {
            "heading": "Attribute-Based Access Control (ABAC)",
            "body": "ABAC makes access decisions based on attributes — of the user, the resource, and the environment. Example policy: 'Allow access IF user.department = Finance AND resource.classification = Internal AND request.time BETWEEN 09:00 AND 18:00 AND request.location = Corporate Network.' ABAC is more powerful and flexible than RBAC but more complex to administer. Modern systems like Azure AD Conditional Access implement ABAC-style policies."
          },
          {
            "heading": "Policy-Based Access Control (PBAC)",
            "body": "An evolution combining elements of RBAC and ABAC. Access is governed by policies that can reference roles AND attributes. AWS IAM's JSON policies are an example — they can reference roles, resource ARNs, conditions (IP range, time, MFA status). This is the dominant model in cloud IAM."
          },
          {
            "heading": "Mandatory vs Discretionary Access Control",
            "body": "MAC (Mandatory): Access decisions are made by the system based on classification labels (e.g., Top Secret, Confidential). Users cannot override. Used in government/military. DAC (Discretionary): Resource owners control access. File system ACLs are a classic example — you own the file and can choose who to share it with. Most enterprise IAM blends MAC principles (enforced by policy) with DAC elements (user-driven sharing within those policies)."
          },
          {
            "heading": "Implementing Least Privilege in Practice",
            "body": "PoLP is a principle, not a feature — you have to architect it deliberately:\n1. Just-Enough-Access (JEA): Define minimum permissions per role/function\n2. Just-In-Time (JIT): Grant elevated access only for the duration of a task, then auto-revoke\n3. Separation of Duties (SoD): Prevent any single user from having conflicting powerful permissions (e.g., the person who creates a payment cannot also approve it)\n4. Regular Access Reviews: Certify that access granted 6 months ago is still appropriate today"
          }
        ],
        "lab": {
          "title": "Install VirtualBox & Create Your First VM",
          "steps": [
            "Download VirtualBox (free) from virtualbox.org — choose your host OS version",
            "Download Windows Server 2022 Evaluation (180-day free) from Microsoft Evaluation Center: search 'Windows Server 2022 evaluation download'",
            "Open VirtualBox → New → Name: 'DC01-IAMLab' | Type: Microsoft Windows | Version: Windows 2022 (64-bit)",
            "RAM: Allocate at least 4GB (4096 MB). Less will make it very slow.",
            "Virtual Hard Disk: Create new VHD, dynamically allocated, 60GB minimum",
            "Before starting: Go to Settings → Storage → Click the empty CD icon → Choose a disk file → Select your Windows Server ISO",
            "Start the VM and follow the Windows Server installation wizard. Choose 'Desktop Experience' (with GUI) when prompted.",
            "After install, log in with the Administrator account you created. Take a screenshot and add it to your Lab Notes.",
            "Note your VM's IP address (run 'ipconfig' in Command Prompt). You'll need this later."
          ]
        },
        "resources": [
          {
            "label": "NIST SP 800-162: ABAC Guide",
            "url": "https://csrc.nist.gov/publications/detail/sp/800-162/final"
          },
          {
            "label": "VirtualBox Download",
            "url": "https://www.virtualbox.org/wiki/Downloads"
          },
          {
            "label": "Windows Server 2022 Evaluation",
            "url": "https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2022"
          }
        ],
        "quiz": [
          "You're building access control for a hospital. Doctors need patient records, nurses need medication records, admins need billing. Which model (RBAC/ABAC) would you use and why?",
          "What is 'role explosion' in RBAC and how can you mitigate it?",
          "Define Separation of Duties and give an example outside of IT.",
          "What is the difference between Just-Enough-Access and Just-In-Time access?",
          "A contractor needs temporary access to a production system for 48 hours. Walk through how you would provision this under least privilege."
        ]
      },
      {
        "day": 3,
        "title": "Active Directory Architecture — Building Your Domain",
        "concepts": [
          {
            "heading": "What is Active Directory?",
            "body": "Active Directory Domain Services (AD DS) is Microsoft's on-premise directory service, released in 1999 and still the backbone of enterprise identity in most large organisations. It stores information about users, computers, groups, and policies and provides authentication (via Kerberos) and authorisation across a Windows domain. Understanding AD is foundational — Azure AD (Entra ID) was designed to extend it to the cloud, and most enterprise IAM environments are hybrid (AD on-prem + Azure AD in cloud)."
          },
          {
            "heading": "Core AD Objects",
            "body": "• User Accounts: Represent individual people or service identities. Have attributes (name, email, department, manager) and can be members of groups.\n• Computer Accounts: Represent domain-joined machines. Required for Group Policy and Kerberos to function.\n• Groups: Collections of users (or computers, or other groups). There are three types:\n  - Security Groups: Used for permissions (add to ACLs, assign to roles)\n  - Distribution Groups: Email-only (no security permissions)\n  - Scope matters: Domain Local (resources in same domain), Global (members from same domain), Universal (members from any domain in forest)\n• Organizational Units (OUs): Container objects for organising AD objects. GPOs are linked to OUs. Think of OUs as folders that apply policy to their contents."
          },
          {
            "heading": "The Domain Controller",
            "body": "A Domain Controller (DC) is a Windows Server that hosts AD DS. It authenticates users and computers, enforces security policies, and replicates directory data to other DCs. In production, you always have at least two DCs for redundancy. The FSMO (Flexible Single Master Operations) roles determine which DC handles specific operations like password changes and schema updates."
          },
          {
            "heading": "Kerberos Authentication Flow",
            "body": "AD uses Kerberos for authentication — not passwords over the network:\n1. User logs in → sends request to DC's Key Distribution Center (KDC)\n2. KDC issues a Ticket Granting Ticket (TGT) — encrypted, time-limited\n3. When user wants to access a resource (e.g., file share), they present TGT to KDC and request a Service Ticket\n4. KDC issues Service Ticket for that specific resource\n5. User presents Service Ticket to resource server\nPasswords are never sent over the network. This is why pass-the-hash and pass-the-ticket attacks are so significant — they steal the ticket, not the password."
          },
          {
            "heading": "DNS and AD",
            "body": "AD is completely dependent on DNS. Domain Controllers register SRV records so clients can find them. If DNS breaks, AD authentication breaks. When building your lab, the DC must also be the DNS server for the domain. This is configured automatically when you promote a server to DC."
          }
        ],
        "lab": {
          "title": "Promote Your Server to Domain Controller",
          "steps": [
            "On your Windows Server VM (DC01), open Server Manager",
            "Click 'Add Roles and Features' → Role-based installation → Select your server",
            "Select 'Active Directory Domain Services' → click Add Features when prompted → proceed through wizard and Install",
            "After installation, click the flag notification in Server Manager → 'Promote this server to a domain controller'",
            "Select 'Add a new forest' — Root domain name: iamlab.local",
            "Set Forest Functional Level: Windows Server 2016 (or highest available)",
            "Set a strong DSRM (Directory Services Restore Mode) password — note it securely",
            "DNS Server will be checked automatically — leave it",
            "Accept the defaults for NETBIOS name and paths, click through prerequisites check → Install",
            "Server will restart automatically. Log back in with: IAMLAB\\Administrator",
            "Open Active Directory Users and Computers (ADUC) from Tools menu in Server Manager",
            "Verify your domain iamlab.local appears. Right-click the domain → create an OU called 'Company' → inside it, create sub-OUs: 'Users', 'Computers', 'Groups', 'Service Accounts'",
            "Screenshot and document: your DC name, domain name, and OU structure"
          ]
        },
        "resources": [
          {
            "label": "Microsoft Learn: AD DS Overview",
            "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview"
          },
          {
            "label": "YouTube: Build AD Lab from Scratch (search: 'Josh Madakor Active Directory Lab')",
            "url": "#"
          },
          {
            "label": "How Kerberos Works (MIT)",
            "url": "https://web.mit.edu/kerberos/www/dialogue.html"
          }
        ],
        "quiz": [
          "What is the difference between a Security Group and a Distribution Group?",
          "Why does Active Directory require DNS to function?",
          "Explain the Kerberos ticket flow in plain English — why is it more secure than sending passwords?",
          "What is a Domain Controller FSMO role? Name two.",
          "Why would you create OUs rather than just putting all users directly in the domain root?"
        ]
      },
      {
        "day": 4,
        "title": "Users, Groups, OUs & the AGDLP Strategy",
        "concepts": [
          {
            "heading": "The AGDLP/AGUDLP Model",
            "body": "AGDLP is the Microsoft best-practice strategy for group nesting and resource access:\nA = Account (user account)\nG = Global Group (department-level: 'Sales-Staff')\nDL = Domain Local Group (resource-level: 'FileshareX-ReadAccess')\nP = Permission (applied to the resource)\n\nWorkflow: Add users → to Global Groups → which are members of Domain Local Groups → which have Permissions on resources.\nWhy? It scales. When a new employee joins Sales, you add them to the Sales Global Group — and they automatically inherit all resource access that group has. When a sales resource changes permissions, you only update one Domain Local Group."
          },
          {
            "heading": "Service Accounts",
            "body": "Service accounts are special user accounts used by applications and services — not humans — to authenticate and run processes. They are some of the most sensitive accounts in AD because they often have elevated privileges and their passwords rarely change. Key types:\n• Standard Service Accounts: Regular user accounts used by services. Riskiest — credentials can be extracted from memory (Kerberoasting attack).\n• Managed Service Accounts (MSA): Windows auto-manages the password. Tied to one computer.\n• Group Managed Service Accounts (gMSA): Extended MSA that can be used across multiple servers. Best practice for services running on server farms.\nALWAYS document service accounts: what service uses them, what permissions they have, who owns them."
          },
          {
            "heading": "The Joiner-Mover-Leaver (JML) Process",
            "body": "JML (also called ILM — Identity Lifecycle Management) governs how identities are created, changed, and removed:\n• Joiner: New employee starts → create account, assign to correct OU and groups, provision access to required systems\n• Mover: Employee changes role/department → update groups and permissions, remove access no longer needed, add new access\n• Leaver: Employee exits → IMMEDIATELY disable account, revoke active sessions, preserve mailbox/data per policy, schedule deletion after retention period\nThe Leaver process is where most organisations fail — accounts left active after departure are a major attack vector."
          },
          {
            "heading": "Password Policies and Account Lockout",
            "body": "Group Policy Object (GPO) settings control password and lockout policies at domain level:\n• Minimum password length: 12+ characters (NIST now recommends 15+)\n• Password complexity: Mix of character types\n• Password history: Prevent reuse of last 10+ passwords\n• Maximum password age: NIST no longer recommends forced rotation unless compromise is suspected\n• Account lockout threshold: Lock after 5-10 failed attempts\n• Lockout duration: Auto-unlock after 30 minutes, or require admin unlock\nFine-Grained Password Policies (FGPP) allow different policies for different groups — e.g., stricter policy for admins."
          }
        ],
        "lab": {
          "title": "Build AD Structure & Simulate the JML Process",
          "steps": [
            "Open Active Directory Users and Computers (ADUC)",
            "Create the following users in your 'Users' OU: Jane.Smith (Sales), Mark.Johnson (IT), Sarah.Williams (Finance), Tom.Brown (Sales)",
            "In the 'Groups' OU, create Global Security Groups: GG-Sales, GG-IT, GG-Finance",
            "Create Domain Local Security Groups: DL-SalesShare-Read, DL-SalesShare-Modify, DL-ITShare-FullControl",
            "Add users to their department Global Groups: Jane.Smith and Tom.Brown → GG-Sales; Mark.Johnson → GG-IT; Sarah.Williams → GG-Finance",
            "Add GG-Sales to DL-SalesShare-Modify (AGDLP in action)",
            "JOINER: Create a new user Alex.Davis in Sales OU. Add to GG-Sales. Document the steps.",
            "MOVER: Alex.Davis is promoted to IT Manager. Move the account to IT OU, remove from GG-Sales, add to GG-IT. Document.",
            "LEAVER: Tom.Brown resigns. Right-click → Disable Account. Right-click → Move to a 'Disabled Accounts' OU. Document date and reason in account Description field.",
            "Open Group Policy Management, right-click your domain → Create and link a GPO named 'Domain Password Policy'. Edit it → Computer Config → Policies → Windows Settings → Security Settings → Account Policies → set: Min Length 14, Complexity Enabled, History 12, Lockout Threshold 5, Lockout Duration 30 min"
          ]
        },
        "resources": [
          {
            "label": "Microsoft: AGDLP Best Practices",
            "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/implementing-least-privilege-administrative-models"
          },
          {
            "label": "NIST Password Guidelines (SP 800-63B)",
            "url": "https://pages.nist.gov/800-63-3/sp800-63b.html"
          }
        ],
        "quiz": [
          "Walk through AGDLP. Why is this better than assigning permissions directly to user accounts?",
          "What is the risk of standard service accounts? What is the preferred alternative?",
          "An employee is terminated at 5pm on a Friday. What are the immediate IAM steps?",
          "What is Kerberoasting and which type of account is most vulnerable to it?",
          "Why does NIST no longer recommend mandatory password rotation on a schedule?"
        ]
      },
      {
        "day": 5,
        "title": "Group Policy — Enforcing Security at Scale",
        "concepts": [
          {
            "heading": "What is Group Policy?",
            "body": "Group Policy is AD's central configuration management system. It allows administrators to enforce security settings, software deployment, and desktop restrictions across thousands of computers and users — from a single place. Settings are stored in Group Policy Objects (GPOs) and linked to OUs, domains, or sites. When a computer or user logs in, Windows downloads and applies applicable GPOs automatically."
          },
          {
            "heading": "GPO Processing Order (LSDOU)",
            "body": "GPOs are applied in this order:\n1. Local: Settings on the local machine\n2. Site: Settings linked to the AD site\n3. Domain: Settings linked to the domain root\n4. OU: Settings linked to the OU containing the object (processed from parent to child OU)\nLater policies override earlier ones (OU beats Domain, by default). This is why you put your security baselines at the Domain level and exceptions at the OU level. 'Enforced' and 'Block Inheritance' flags can override this order."
          },
          {
            "heading": "Critical Security GPO Settings",
            "body": "Key security policies to configure via GPO:\n• Audit Policy: Log successful and failed logons, privilege use, object access, policy changes\n• Windows Defender / Firewall: Ensure endpoint protection is enabled and consistent\n• USB/Removable Media: Block or control external storage devices\n• Screen Lock: Auto-lock after 5-10 minutes of inactivity\n• Remote Desktop: Control who can RDP to servers\n• Software Restriction / AppLocker: Whitelist approved applications\n• Credential Guard: Protects credentials in memory from extraction (modern Windows)"
          },
          {
            "heading": "Security Baselines",
            "body": "Microsoft publishes Security Compliance Toolkit with pre-built GPOs based on CIS Benchmarks and NIST guidelines. These are your starting point for any new deployment. Import them, review them, adapt to your environment. Don't build security policy from scratch when Microsoft and CIS have already done the heavy lifting."
          },
          {
            "heading": "Auditing and Logging in AD",
            "body": "Every access event in AD can be logged. Security Event Log on the DC records authentication events. Key event IDs to know:\n• 4624: Successful logon\n• 4625: Failed logon\n• 4648: Logon with explicit credentials (often indicates lateral movement)\n• 4720: User account created\n• 4726: User account deleted\n• 4732: Member added to security group\n• 4771: Kerberos pre-authentication failed\nForward these logs to a SIEM (like Microsoft Sentinel or Splunk) for centralised analysis."
          }
        ],
        "lab": {
          "title": "Deploy Security GPOs in Your Lab",
          "steps": [
            "Open Group Policy Management Console (GPMC) on your DC",
            "Create a new GPO linked to the domain root: 'Corporate Security Baseline'",
            "Edit it → Computer Config → Policies → Windows Settings → Security Settings → Local Policies → Audit Policy:",
            "  - Audit account logon events: Success and Failure",
            "  - Audit logon events: Success and Failure",
            "  - Audit account management: Success",
            "  - Audit policy change: Success",
            "Navigate to Computer Config → Administrative Templates → Control Panel → Personalization:",
            "  - Set 'Screen saver timeout': 300 seconds (5 minutes)",
            "  - Enable 'Password protect the screen saver'",
            "Create a second GPO linked to the 'IT' OU: 'IT-AdminWorkstation-Policy'",
            "Edit → Computer Config → Windows Settings → Security Settings → Local Policies → User Rights Assignment:",
            "  - 'Allow log on locally': Remove Everyone, add only GG-IT and Domain Admins",
            "Run 'gpupdate /force' in Command Prompt on your DC",
            "Open Event Viewer → Windows Logs → Security. Find event 4624 (logon). Screenshot and document what you see.",
            "Download Microsoft Security Compliance Toolkit from Microsoft website and review the Windows Server 2022 security baseline GPO — note 5 settings you find interesting"
          ]
        },
        "resources": [
          {
            "label": "Microsoft Security Compliance Toolkit",
            "url": "https://www.microsoft.com/en-us/download/details.aspx?id=55319"
          },
          {
            "label": "CIS Benchmarks (free PDFs)",
            "url": "https://www.cisecurity.org/cis-benchmarks"
          },
          {
            "label": "Windows Security Event IDs Reference",
            "url": "https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/"
          }
        ],
        "quiz": [
          "What does LSDOU stand for and why does the order matter?",
          "You need all servers to enforce a specific setting, but one OU of servers needs a different value. How do you handle this without affecting other OUs?",
          "What Windows event ID would you look for to detect a brute-force attack on AD?",
          "What is the Microsoft Security Compliance Toolkit and why would you use it instead of building GPOs from scratch?",
          "A user reports they can't access a shared folder they could access yesterday. Walk through your troubleshooting steps."
        ]
      }
    ]
  },
  {
    "week": 2,
    "title": "Active Directory — Advanced & Hybrid Identity Prep",
    "theme": "Deepen AD expertise with advanced admin, security hardening, and prepare for hybrid identity.",
    "days": [
      {
        "day": 1,
        "title": "AD Security Hardening & Tier Model",
        "concepts": [
          {
            "heading": "The AD Tiered Administration Model",
            "body": "Microsoft's recommended model divides AD administration into tiers to limit lateral movement:\n• Tier 0: Domain Controllers, AD itself, trust infrastructure. Only Tier 0 admins log into these.\n• Tier 1: Enterprise servers, applications, services. Only Tier 1 admins log into servers.\n• Tier 2: Workstations and devices. Tier 2 admins manage helpdesk and end-user devices.\nThe rule: Admin accounts CANNOT move up tiers. A Tier 2 admin account cannot be used on a Tier 1 server. This prevents credential theft from escalating — if a workstation is compromised, the attacker only gets Tier 2 credentials."
          },
          {
            "heading": "Privileged Access Workstations (PAWs)",
            "body": "A PAW is a dedicated, hardened device used ONLY for privileged administrative tasks. It has no internet access, no email, no productivity applications. Admins have a regular workstation for daily work and a PAW for admin tasks. This isolates admin credentials from the internet-connected attack surface. PAWs for Tier 0 should be physically secured, air-gapped where possible, and never used for any non-admin purpose."
          },
          {
            "heading": "Attack Vectors: What Attackers Do to AD",
            "body": "Understanding attacks makes you a better defender:\n• Pass-the-Hash (PtH): Steal NTLM hash from memory, use it to authenticate without knowing the password. Mitigated by Credential Guard, not reusing admin accounts.\n• Pass-the-Ticket (PtT): Steal Kerberos ticket from memory. Mitigated by short ticket lifetimes, monitoring.\n• Kerberoasting: Request service tickets for service accounts with SPNs, crack offline. Mitigated by long random passwords on service accounts, gMSAs.\n• Golden Ticket: Compromise the KRBTGT account hash — gives unlimited Kerberos tickets to anywhere. Most severe AD attack.\n• DCSync: Simulate a DC to replicate all password hashes. Requires Domain Replication rights. Detected by monitoring unusual replication requests.\n• BloodHound: Attack graph tool that visualises paths to Domain Admin. Every red teamer uses it; defenders should too."
          },
          {
            "heading": "Protecting the KRBTGT Account",
            "body": "KRBTGT is the service account used to encrypt all Kerberos tickets. If an attacker gets its hash, they can forge Golden Tickets — unlimited access to anything, for potentially years. Best practice: Reset KRBTGT password twice in succession (twice because of how replication works) after any suspected compromise, after purple team exercises, and every 180 days in high-security environments."
          }
        ],
        "lab": {
          "title": "Audit AD with BloodHound (Defensive Perspective)",
          "steps": [
            "On your DC, open PowerShell as Administrator",
            "Run: Install-Module -Name BloodHound -Force (or download SharpHound collector from GitHub: BloodHoundAD/BloodHound)",
            "Run the SharpHound data collector: .\\SharpHound.exe -c All",
            "This creates a ZIP of JSON files describing your AD relationships",
            "Download BloodHound Community Edition (free) from github.com/BloodHoundAD/BloodHound",
            "Import the SharpHound ZIP into BloodHound",
            "Run the pre-built query: 'Find Shortest Paths to Domain Admins'",
            "EXERCISE: Look at the attack paths. How many hops from a regular user to Domain Admin? Document the paths and then think: which group membership or permission change would break the most attack paths?",
            "This is how red teams operate — and how defenders should audit their own environments."
          ]
        },
        "resources": [
          {
            "label": "BloodHound Community Edition",
            "url": "https://github.com/BloodHoundAD/BloodHound"
          },
          {
            "label": "Microsoft: Securing Privileged Access",
            "url": "https://learn.microsoft.com/en-us/security/privileged-access-workstations/privileged-access-deployment"
          },
          {
            "label": "AD Security Blog (Sean Metcalf)",
            "url": "https://adsecurity.org"
          }
        ],
        "quiz": [
          "Explain the 3-tier AD admin model. Why can admin accounts not move up tiers?",
          "What is Kerberoasting and which specific AD objects are targeted?",
          "Why is the KRBTGT account so critical to protect? What does a Golden Ticket allow?",
          "What is BloodHound and why should defenders use it proactively?",
          "An attacker has compromised a helpdesk workstation. Under the tier model, what can they access?"
        ]
      },
      {
        "day": 2,
        "title": "Microsoft Entra ID (Azure AD) — Cloud Identity Foundations",
        "concepts": [
          {
            "heading": "Azure AD vs AD DS — Critical Differences",
            "body": "Azure AD (now branded Microsoft Entra ID) is NOT Active Directory in the cloud. It is a different product built for modern cloud and web applications:\n• Protocol: AD DS uses Kerberos/NTLM (designed for Windows LANs). Azure AD uses OAuth 2.0, OIDC, SAML (designed for the web).\n• Structure: AD DS has OUs, Group Policy, computer objects, forests. Azure AD has no OUs, no GPOs, no computer objects in the traditional sense.\n• Authentication: AD DS authenticates on the LAN. Azure AD authenticates from anywhere via HTTPS.\n• Management: AD DS is managed via ADUC, GPMC. Azure AD is managed via the Azure Portal, PowerShell, or Graph API.\nThey are complementary: most enterprises run both and connect them via Azure AD Connect."
          },
          {
            "heading": "Microsoft Entra ID Licensing Tiers",
            "body": "• Free: Included with Microsoft 365. Basic SSO, MFA, user/group management.\n• P1 (Entra ID P1): Conditional Access, hybrid identity (Azure AD Connect), group-based licensing, self-service password reset (SSPR).\n• P2 (Entra ID P2): Identity Protection (risk-based policies), Privileged Identity Management (PIM), access reviews, entitlement management.\nFor learning: The Microsoft 365 Developer Program gives you a free E5 tenant (includes P2 features) — this is your lab environment."
          },
          {
            "heading": "Key Entra ID Objects",
            "body": "• Users: Cloud users, guest users (B2B), and synced users from on-prem AD\n• Groups: Security groups (for access) and Microsoft 365 groups (include mailbox, SharePoint, Teams)\n• Enterprise Applications: Represents SaaS apps integrated for SSO (Salesforce, Zoom, ServiceNow, etc.)\n• App Registrations: Custom applications registered to use Entra ID for authentication (developers use these)\n• Managed Identities: Service identities for Azure resources — no credentials to manage (more on this in Week 9)\n• Devices: Azure AD registered, Azure AD joined, and Hybrid Azure AD joined devices"
          },
          {
            "heading": "Conditional Access — The Policy Engine",
            "body": "Conditional Access (CA) is Entra ID's core security policy engine. It implements ABAC-style decisions: IF [assignments/conditions] THEN [access controls].\n• Assignments: Who (users/groups), What (apps), How (device platform, location, client app, device compliance, sign-in risk)\n• Controls: Grant access (with MFA required, compliant device required, etc.) or Block access\nCA is the primary tool for implementing Zero Trust in Microsoft environments. Every enterprise should have a documented CA policy set."
          }
        ],
        "lab": {
          "title": "Set Up M365 Developer Tenant & First Entra ID Lab",
          "steps": [
            "Go to developer.microsoft.com/en-us/microsoft-365/dev-program and sign up with a personal Microsoft account",
            "Choose 'Instant sandbox' — this provisions an E5 tenant with pre-populated users in ~2 minutes",
            "Sign in at portal.azure.com with your new admin credentials",
            "Navigate to: Azure Active Directory (or search Entra ID) in the portal",
            "Explore the Users blade — note the pre-created users (MOD Administrator, various test users)",
            "Create a new cloud-only user: Navigate to Users → New User → Create user",
            "  Username: test.secuser@[yourdomain].onmicrosoft.com | Display name: Security Test User",
            "  Auto-generate password, force change at first login",
            "Create a Security Group: Groups → New Group → Security → Name: 'SG-IAM-Students'",
            "Add your test user to the group",
            "Navigate to Conditional Access (search in portal or under Protection in Entra ID)",
            "Create your first CA policy: Block Legacy Authentication",
            "  Assignments: All users | Cloud apps: All apps | Conditions → Client apps: Select Exchange ActiveSync and 'Other clients'",
            "  Grant: Block access → Enable policy in Report-only mode first",
            "Document: what legacy authentication is and why blocking it matters (hint: it bypasses MFA)"
          ]
        },
        "resources": [
          {
            "label": "Microsoft 365 Developer Program",
            "url": "https://developer.microsoft.com/en-us/microsoft-365/dev-program"
          },
          {
            "label": "Microsoft Learn: Entra ID fundamentals",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/"
          },
          {
            "label": "John Savill YouTube: Azure AD Deep Dives",
            "url": "https://www.youtube.com/@NTFAQGuy"
          }
        ],
        "quiz": [
          "List three fundamental architectural differences between AD DS and Azure AD/Entra ID.",
          "What Entra ID license tier is required for Conditional Access? For PIM?",
          "What is legacy authentication in the context of Azure AD, and why is blocking it a security priority?",
          "What is the difference between a Guest User and a Member User in Entra ID?",
          "You need to enforce MFA for all admins but not all users. How would you structure this in Conditional Access?"
        ]
      },
      {
        "day": 3,
        "title": "Conditional Access & MFA at Depth",
        "concepts": [
          {
            "heading": "The Zero Trust Policy Engine",
            "body": "Conditional Access implements the Zero Trust principle of 'never trust, always verify.' Every access request is evaluated against policies at runtime — not just at login time. The evaluation happens in the cloud after initial authentication and before the access token is issued to the application."
          },
          {
            "heading": "Conditional Access Policy Anatomy",
            "body": "A CA policy has three sections:\n1. ASSIGNMENTS: Who does this apply to? Which apps? What conditions trigger it?\n   - Users & Groups: Specific users, all users, or directory roles\n   - Target Resources: All apps or specific named apps\n   - Conditions: Sign-in risk (P2), device platform, locations (named/trusted IPs), client apps, device filter\n2. ACCESS CONTROLS (Grant): What happens if conditions are met?\n   - Require MFA\n   - Require compliant device\n   - Require Hybrid Azure AD joined device\n   - Require approved client app\n   - Require app protection policy (Intune MAM)\n   - Block access\n3. SESSION CONTROLS: Limit what users can do within an app (sign-in frequency, app-enforced restrictions, MCAS integration)"
          },
          {
            "heading": "MFA Methods in Entra ID",
            "body": "From most to least phishing-resistant:\n1. FIDO2 Security Keys (hardware keys like YubiKey) — PHISHING PROOF\n2. Windows Hello for Business (biometric/PIN on compliant device) — PHISHING PROOF\n3. Microsoft Authenticator App with Number Matching — Very strong\n4. OATH Hardware Tokens — Strong\n5. OATH Software Tokens (Authenticator app TOTP) — Good\n6. SMS/Voice Call — Weakest (SIM-swapping risk) — Should be phased out\nEnterprise best practice: Enforce FIDO2 or Windows Hello for admins. Enforce Authenticator app with number matching for all other users. Remove SMS as an option."
          },
          {
            "heading": "Named Locations & IP-Based Policies",
            "body": "Named Locations allow you to define trusted IP ranges (corporate network, VPN ranges) or trusted countries. You can then build policies like:\n• Require MFA when NOT on corporate network\n• Block all access from high-risk countries\n• Allow access to sensitive apps only from trusted locations\nPro tip: Never use trusted location as the ONLY security control — VPNs can be compromised. Use it as a signal that modifies MFA requirements, not eliminates them."
          }
        ],
        "lab": {
          "title": "Build a Progressive Conditional Access Policy Set",
          "steps": [
            "In your M365 dev tenant, navigate to Entra ID → Security → Conditional Access",
            "Policy 1 — MFA for All Users on Azure Portal:",
            "  Name: 'BLOCK-01: Require MFA - Azure Portal' | Users: All users | Apps: Microsoft Azure Management",
            "  Grant: Require MFA | Enable in Report-only first, then On",
            "Policy 2 — Block High-Risk Sign-ins (requires P2):",
            "  Name: 'BLOCK-02: Block High Risk Sign-ins' | Users: All users | Apps: All cloud apps",
            "  Conditions → Sign-in risk: High | Grant: Block access",
            "Policy 3 — Require MFA for Admins (all privileged role holders):",
            "  Name: 'ADMIN-01: Require MFA - All Admins' | Users: Directory roles → select all privileged roles",
            "  Apps: All cloud apps | Grant: Require MFA, Require compliant device (if you have Intune)",
            "Policy 4 — Named Location Setup:",
            "  Go to Named Locations → + IP ranges location → Name: 'Trusted Locations' → Add your home IP (search 'what is my IP')",
            "  Policy: Allow no MFA from Trusted Location for standard users (as an example of location-based policy)",
            "Test your policies: Open InPrivate browser, try to log in as your test user → observe MFA prompts",
            "Review the Sign-in logs (Entra ID → Sign-ins) and find the Conditional Access column — review what policies applied and why"
          ]
        },
        "resources": [
          {
            "label": "Microsoft CA Policy Templates (recommended starting policies)",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/concept-conditional-access-policy-common"
          },
          {
            "label": "CISA Zero Trust Maturity Model",
            "url": "https://www.cisa.gov/zero-trust-maturity-model"
          }
        ],
        "quiz": [
          "What are the three main sections of a Conditional Access policy?",
          "Rank MFA methods from most to least phishing-resistant and explain why FIDO2 is at the top.",
          "Why should named location (trusted IP) never be the sole security control for sensitive applications?",
          "What is the difference between Grant controls and Session controls in CA?",
          "A user is travelling internationally and gets blocked from accessing company email. How do you investigate and temporarily resolve this without weakening security?"
        ]
      },
      {
        "day": 4,
        "title": "Privileged Identity Management (PIM) — Just-In-Time Access",
        "concepts": [
          {
            "heading": "Why PIM Exists",
            "body": "Traditional IAM grants permanent privileged roles to admin accounts — they always have those permissions. This creates enormous risk: a compromised admin account has persistent, always-on access to everything that role permits. PIM solves this by making privileged access TEMPORARY and JUSTIFIED. Admins are 'eligible' for roles but don't hold them permanently. When they need to use a privileged role, they activate it for a limited time window with a justification."
          },
          {
            "heading": "PIM Core Features",
            "body": "• Eligible Assignments: User can request to activate the role — but doesn't have it until they do.\n• Active Assignments: User permanently has the role (can be limited to time-bounded permanent, e.g., for a contractor's duration).\n• Just-In-Time (JIT) Activation: Roles are activated on-demand, with:\n  - Justification required (why do you need it now?)\n  - MFA required (prove it's really you)\n  - Approval required (optional — a second person must approve the request)\n  - Duration limit (maximum activation time, e.g., 1-8 hours)\n• Access Reviews: Regularly certify that eligible users should retain their eligibility\n• Alerts: PIM detects suspicious patterns — e.g., a role was activated but not used, a user activated from an unusual location"
          },
          {
            "heading": "PIM for Azure Resources vs Entra ID Roles",
            "body": "PIM covers two categories:\n1. Entra ID roles (Global Admin, User Admin, Security Admin, etc.) — what most think of first\n2. Azure resource roles (Owner, Contributor, Reader on subscriptions/resource groups) — equally important\nIn practice, a security-mature organisation should have PIM covering ALL privileged access in both categories. The Global Administrator role especially should NEVER be permanently assigned to accounts used for daily work."
          },
          {
            "heading": "Emergency Access Accounts (Break-Glass)",
            "body": "Even with PIM, you need emergency access — what happens if PIM itself has an outage, or the account used to manage it is locked? Break-glass accounts are:\n• Two accounts minimum\n• Excluded from all Conditional Access policies (including MFA requirements)\n• Credentials stored in a physical safe, not in a password manager\n• Monitored with alerts on ANY use (their sign-in should trigger immediate investigation)\n• Tested quarterly (actually test that they work)\nThis is a critical architectural requirement that many organisations overlook."
          }
        ],
        "lab": {
          "title": "Configure PIM for All Privileged Roles",
          "steps": [
            "In your M365 dev tenant, navigate to Entra ID → Identity Governance → Privileged Identity Management",
            "Click 'Entra ID roles' → 'Manage' → Select 'Global Administrator'",
            "Click 'Settings' → Edit: Set max activation duration: 1 hour | Require justification: Yes | Require MFA: Yes | Require approval: No (for lab, set to Yes in production)",
            "Click 'Assignments' → 'Add assignments' → Select your test user → Assignment type: Eligible → No end date",
            "Now simulate the activation: Open InPrivate browser, sign in as your test user",
            "Navigate to PIM → 'My roles' → 'Entra ID roles' → find Global Administrator → 'Activate'",
            "Enter justification: 'Testing PIM activation for lab exercise' → Activate",
            "Observe: the role is now active for 1 hour. Note the expiry time.",
            "Back in admin portal: PIM → Audit history → Review the activation log entry",
            "Configure a PIM alert: PIM → Alerts → Review the built-in alerts and enable 'Roles are being activated too frequently'",
            "BONUS: Configure an Access Review for the Global Administrator eligible assignment: PIM → Access Reviews → New → select the role, set weekly reviewer as yourself"
          ]
        },
        "resources": [
          {
            "label": "Microsoft Learn: PIM Documentation",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/"
          },
          {
            "label": "Microsoft: Emergency Access Accounts",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/roles/security-emergency-access"
          }
        ],
        "quiz": [
          "What is the difference between an eligible assignment and an active assignment in PIM?",
          "Why should Global Administrator never be permanently assigned to daily-use accounts?",
          "What is a break-glass account? What conditions must it meet to be effective?",
          "A PIM audit shows a role was activated but no privileged actions were performed. What does this suggest and what do you do?",
          "How does PIM implement the principle of least privilege and the principle of Just-In-Time access?"
        ]
      },
      {
        "day": 5,
        "title": "Azure AD Connect — Hybrid Identity & Synchronisation",
        "concepts": [
          {
            "heading": "What is Hybrid Identity?",
            "body": "Hybrid identity means the same user identity is used to access both on-premise resources (AD DS) and cloud resources (Azure AD / Entra ID). The identity exists in both places and is synchronised. This is the reality for 90%+ of enterprises — they have years of investment in on-prem AD and are adopting cloud services, so they need both to work together seamlessly."
          },
          {
            "heading": "Azure AD Connect",
            "body": "Azure AD Connect is Microsoft's synchronisation engine. It runs on a Windows Server and synchronises selected OUs from on-prem AD to Azure AD on a regular schedule (default: every 30 minutes). It is the bridge of hybrid identity.\nKey sync options:\n• Password Hash Sync (PHS): Hashes of password hashes are synced to Azure AD. Users authenticate against Azure AD directly. Simplest and most resilient.\n• Pass-Through Authentication (PTA): Authentication request passes through to on-prem AD in real-time. Password never leaves on-prem. More complex.\n• Federation (ADFS): Full federation with on-prem ADFS infrastructure. Most complex, highest capability, highest operational burden.\nMicrosoft now recommends PHS for most organisations — it provides cloud authentication even if the on-prem environment is down."
          },
          {
            "heading": "Seamless SSO",
            "body": "With Azure AD Connect configured, you can enable Seamless SSO. When a domain-joined computer on the corporate network accesses an Azure AD application, the user is automatically signed in — no username/password prompt. This uses Kerberos tickets generated by the on-prem DC, then exchanged for Azure AD tokens. The user experiences true SSO across on-prem and cloud."
          },
          {
            "heading": "The Hybrid Identity Source of Truth Problem",
            "body": "In a hybrid environment, on-prem AD is the authoritative source of truth for synced users. Changes must be made in AD — they sync to Azure AD. You cannot change synced attributes in the Azure portal; those fields are grayed out. This means your IAM processes (provisioning, JML) must run against AD, not Azure AD, for synced users. Cloud-only users are managed directly in Azure AD."
          }
        ],
        "lab": {
          "title": "(Advanced) Connect Your AD Lab to Azure AD",
          "steps": [
            "This lab requires your VirtualBox DC01 and your M365 dev tenant to be connected",
            "On DC01, open a browser and navigate to: portal.azure.com → search 'Azure AD Connect' → Download Azure AD Connect v2",
            "Run the installer on DC01 → Choose 'Use express settings' for simplicity in lab",
            "Sign in with your M365 global admin credentials when prompted",
            "Sign in with your iamlab.local Domain Admin credentials when prompted",
            "On 'Domain and OU filtering': Select only your 'Company/Users' OU (don't sync everything)",
            "On 'Uniquely identifying users': leave defaults",
            "Enable 'Password Hash Synchronization' if not already selected",
            "Complete the wizard → Synchronize",
            "After sync completes (~5 minutes), go to Azure portal → Entra ID → Users",
            "You should see your on-prem users (Jane.Smith, Mark.Johnson, etc.) appear with a 'Directory Synced: Yes' indicator",
            "Try to edit an attribute on a synced user in the portal — observe that it's locked",
            "Edit the same attribute in ADUC on DC01. Wait 30 min or run: Start-ADSyncSyncCycle -PolicyType Delta in PowerShell on the sync server",
            "Verify the change appeared in Azure AD. Document the sync latency."
          ]
        },
        "resources": [
          {
            "label": "Microsoft: Azure AD Connect documentation",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/hybrid/whatis-azure-ad-connect"
          },
          {
            "label": "Microsoft: Choose right authentication method",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/hybrid/choose-ad-authn"
          }
        ],
        "quiz": [
          "What are the three main authentication methods in Azure AD Connect? Which does Microsoft recommend for most organisations and why?",
          "In a hybrid environment, which system is the source of truth for user attributes?",
          "What is Seamless SSO and how does it work technically?",
          "A user's phone number attribute is wrong in Azure AD but you cannot edit it in the portal. Why, and how do you fix it?",
          "What would happen to cloud application access if your on-prem AD went down, for each of the three sync methods?"
        ]
      }
    ]
  },
  {
    "week": 3,
    "title": "AWS IAM — Cloud-Native Identity at Depth",
    "theme": "Master AWS's powerful, granular IAM service — the standard for cloud-native identity.",
    "days": [
      {
        "day": 1,
        "title": "AWS IAM Fundamentals — Users, Groups, Roles, Policies",
        "concepts": [
          {
            "heading": "AWS IAM Architecture Overview",
            "body": "AWS Identity and Access Management (IAM) is AWS's access control system. It is global (not region-specific) and controls who can do what in your AWS account. Key principle: By DEFAULT, all access in AWS is DENIED. You must explicitly allow everything. This 'deny by default' model is a fundamental security advantage over many on-prem systems."
          },
          {
            "heading": "IAM Principals: Users, Groups, Roles",
            "body": "• IAM Users: Long-term credentials (username+password for console, access keys for API). Represent individual humans or applications. Best practice: Use roles instead of long-term access keys wherever possible.\n• IAM Groups: Collections of users with shared permissions. Users inherit group policies. Groups cannot be nested.\n• IAM Roles: Temporary credentials, assumed by any trusted entity (AWS services, federated users, cross-account principals, or even AI agents). Roles don't have passwords — they issue temporary security tokens via STS (Security Token Service). This is the preferred pattern for applications and services running in AWS."
          },
          {
            "heading": "IAM Policies",
            "body": "Policies are JSON documents that define what actions are allowed or denied on which resources under what conditions.\nFive types:\n1. Identity-based policies: Attached to users, groups, or roles (most common)\n2. Resource-based policies: Attached to AWS resources (S3 bucket policy, SQS queue policy)\n3. Permission Boundaries: Maximum permissions an identity policy can grant — used to delegate admin while limiting blast radius\n4. SCPs (Service Control Policies): Organization-level maximum permissions applied via AWS Organizations\n5. Session Policies: Restrict permissions during an AssumeRole session\nEvaluation order: Explicit DENY always wins → then SCPs → then resource policies → then identity policies. Default is DENY."
          },
          {
            "heading": "Policy JSON Structure",
            "body": "Every IAM policy has this structure:\n{\n  'Version': '2012-10-17',\n  'Statement': [\n    {\n      'Effect': 'Allow' or 'Deny',\n      'Action': ['s3:GetObject', 's3:PutObject'],\n      'Resource': 'arn:aws:s3:::my-bucket/*',\n      'Condition': {\n        'StringEquals': {'aws:RequestedRegion': 'eu-west-1'}\n      }\n    }\n  ]\n}\nThe ARN (Amazon Resource Name) uniquely identifies every AWS resource. Learning to read and write ARNs is essential for AWS IAM work."
          },
          {
            "heading": "Securing the Root Account",
            "body": "The AWS root account has unlimited access to everything — it cannot be restricted by IAM policies. Immediate tasks after creating any AWS account:\n1. Enable MFA on root (hardware token ideally)\n2. Create an IAM admin user for daily use — NEVER use root for daily tasks\n3. Delete root access keys if they exist\n4. Set account-level contacts and alternate contacts\n5. Enable AWS Organizations (even for a single account — for SCPs and better cost visibility)"
          }
        ],
        "lab": {
          "title": "AWS Account Setup & First IAM Configuration",
          "steps": [
            "Sign up for AWS Free Tier at aws.amazon.com — use a dedicated email address",
            "IMMEDIATELY after login as root: click your name → Security credentials → Activate MFA → Virtual MFA device → scan QR with Authenticator app",
            "Create an IAM admin user: IAM → Users → Create User",
            "  Username: admin-[yourname] | Enable console access | Custom password",
            "  Attach policies: Select 'AdministratorAccess' managed policy",
            "  Create Access Keys for CLI use (save securely in a password manager)",
            "Sign out of root. Sign in as your new IAM admin user. You should use this for all future work.",
            "Install AWS CLI v2 on your computer (search 'AWS CLI install')",
            "Configure CLI: run 'aws configure' → enter your Access Key ID, Secret Access Key, region (eu-west-1 or us-east-1), output format: json",
            "Test: run 'aws iam get-user' — you should see your user details",
            "Create a Developer group: IAM → Groups → Create → Name: Developers",
            "Create a custom policy for developers: IAM → Policies → Create Policy → JSON view:",
            "  Allow: ec2:Describe*, ec2:RunInstances, s3:GetObject, s3:ListBucket, s3:PutObject",
            "  Restrict to: specific S3 bucket ARN and only eu-west-1 region using Condition",
            "Attach the policy to the Developers group. Create a test user and add to Developers group.",
            "Test access: as the test user, try to list S3 buckets vs access EC2 — verify least privilege is working"
          ]
        },
        "resources": [
          {
            "label": "AWS IAM User Guide",
            "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/"
          },
          {
            "label": "AWS Policy Generator (visual tool)",
            "url": "https://awspolicygen.s3.amazonaws.com/policygen.html"
          },
          {
            "label": "IAM Policy Simulator (test policies)",
            "url": "https://policysim.aws.amazon.com/"
          }
        ],
        "quiz": [
          "AWS IAM uses a 'deny by default' model. What does this mean in practice?",
          "What is the difference between an IAM User and an IAM Role?",
          "What are Permission Boundaries and when would you use them?",
          "Write the 5 components of an IAM policy statement (using the JSON structure).",
          "Why should you never use the AWS root account for daily tasks?"
        ]
      },
      {
        "day": 2,
        "title": "IAM Roles for Services — The Credential-Free Pattern",
        "concepts": [
          {
            "heading": "Why Roles Beat Long-Term Credentials for Services",
            "body": "The classic mistake in cloud architecture: hardcoding AWS access keys in application code, config files, or environment variables. Keys can be accidentally committed to GitHub (a very common real-world breach vector), stolen from servers, or exposed in logs. IAM Roles eliminate this problem entirely for workloads running in AWS. A role is assumed dynamically — the service (EC2, Lambda, ECS task) gets temporary credentials via the Instance Metadata Service that auto-rotate every few hours. No stored credentials, no secrets to rotate, no leak risk."
          },
          {
            "heading": "How AssumeRole Works (STS)",
            "body": "When an EC2 instance with an attached role makes an API call:\n1. Instance requests credentials from the Instance Metadata Service (IMDS): http://169.254.169.254/latest/meta-data/iam/security-credentials/[role-name]\n2. IMDS returns temporary credentials (AccessKeyId, SecretAccessKey, SessionToken, Expiration)\n3. Application uses these temporary credentials to make AWS API calls\n4. STS validates the request against the role's permission policy\n5. Credentials automatically expire and are refreshed\nThe AWS SDK handles this automatically — your code calls AWS services normally; credential management is invisible."
          },
          {
            "heading": "Trust Policies vs Permission Policies",
            "body": "IAM Roles have TWO policy documents:\n1. TRUST POLICY: Who can assume this role? (the 'who' side — e.g., 'EC2 service', or another AWS account, or a federated IdP)\n2. PERMISSION POLICY: What can the role do once assumed? (the 'what' side — same JSON format as user policies)\nCommon trust policy principals:\n• Service principals: ec2.amazonaws.com, lambda.amazonaws.com, ecs-tasks.amazonaws.com\n• AWS account ARNs: arn:aws:iam::123456789:root (for cross-account)\n• Federated principals: SAML providers, OIDC providers (for human SSO or CI/CD systems)"
          },
          {
            "heading": "Cross-Account Roles",
            "body": "Roles enable secure cross-account access without creating users in every account. Pattern:\n1. Account B creates a role with a trust policy allowing Account A to assume it\n2. Account A's users/roles AssumeRole into Account B's role\n3. They receive temporary credentials scoped to Account B's permissions\nThis is the foundation of AWS Organizations multi-account architecture — one central identity account, many workload accounts, all accessed via role assumption. Critically: NEVER create IAM users in spoke accounts when you can use roles from a central identity account."
          }
        ],
        "lab": {
          "title": "EC2 Instance Role — Accessing S3 Without Credentials",
          "steps": [
            "Create an S3 bucket: S3 console → Create bucket → Name: 'iam-lab-[yourname]-2024' → Block all public access → Create",
            "Upload a test file to the bucket: any text file, name it 'test-document.txt'",
            "Create an IAM Role for EC2:",
            "  IAM → Roles → Create Role → Trusted entity: AWS Service → EC2",
            "  Create a custom policy (JSON): Allow s3:GetObject and s3:ListBucket on ONLY your specific bucket ARN",
            "  Name the role: EC2-S3ReadOnly-Role",
            "Launch an EC2 instance: EC2 console → Launch Instance → Amazon Linux 2023 → t2.micro (free tier)",
            "  Key pair: Create new key pair, download the .pem file",
            "  IAM Instance Profile: Select your EC2-S3ReadOnly-Role",
            "  Security Group: Allow SSH (port 22) from your IP only",
            "  Launch the instance",
            "Connect to the instance via EC2 Instance Connect (browser-based SSH — no key needed in console)",
            "Run: aws sts get-caller-identity — note the output shows the ROLE, not an IAM user",
            "Run: aws s3 ls s3://iam-lab-[yourname]-2024 — it should work without any 'aws configure'",
            "Run: aws s3 ls (no bucket specified) — observe: this FAILS because you only allowed ListBucket on the specific bucket",
            "Run: aws iam list-users — observe: this FAILS because the role has no IAM permissions. Least privilege working.",
            "Document: Why this is more secure than using access keys"
          ]
        },
        "resources": [
          {
            "label": "AWS: IAM Roles for EC2",
            "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html"
          },
          {
            "label": "AWS STS Documentation",
            "url": "https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html"
          }
        ],
        "quiz": [
          "What is the IMDS and what security concern does IMDSv2 address compared to v1?",
          "Explain the difference between a Trust Policy and a Permission Policy on an IAM Role.",
          "An EC2 instance needs to write to DynamoDB and send messages to SQS. Write the minimum required IAM actions for this policy.",
          "How does cross-account role assumption work? Why is it preferable to creating IAM users in multiple accounts?",
          "A Lambda function needs to read from one S3 bucket and write to another. How do you configure this without hardcoding credentials?"
        ]
      },
      {
        "day": 3,
        "title": "AWS IAM Identity Center & Permission Sets",
        "concepts": [
          {
            "heading": "What is IAM Identity Center?",
            "body": "IAM Identity Center (formerly AWS SSO) provides centralised access management for multiple AWS accounts and cloud applications. Instead of creating IAM users in every AWS account, you create users ONCE (or connect your existing IdP like Azure AD/Okta) and assign them permission sets that get applied across accounts. It is the recommended approach for any organisation with more than one AWS account — which is every serious AWS user."
          },
          {
            "heading": "Permission Sets",
            "body": "Permission Sets are templates of permissions that get replicated as IAM roles into each assigned account. When you assign a user to an account with a permission set:\n• IAM Identity Center creates an IAM role in the target account\n• The permission set's policies become that role's permissions\n• The user can then assume that role via the Identity Center portal\nBuilt-in permission sets: AWS provides pre-built sets (AdministratorAccess, ReadOnlyAccess, PowerUserAccess). You can also create custom permission sets."
          },
          {
            "heading": "Attribute-Based Access Control in Identity Center",
            "body": "Identity Center supports ABAC using attributes from your identity source. You can map attributes (like department, job title, cost center) from your IdP and then create permission policies that reference these attributes using PrincipalTag conditions. This means access can be automatically correct when someone changes department — without manually updating group memberships. This is the leading edge of scalable IAM design."
          },
          {
            "heading": "The Identity Source Options",
            "body": "Identity Center can use:\n• Identity Center's built-in directory (simple, no external dependency)\n• Active Directory (via AD Connector or AD in AWS Managed AD)\n• External IdP via SAML 2.0 (Okta, Azure AD, Ping, etc.) — most common enterprise pattern\nWhen connected to an external IdP, Identity Center handles the SCIM (System for Cross-domain Identity Management) provisioning — users and groups are automatically synced from your IdP to Identity Center, so access follows your HR/IT processes."
          }
        ],
        "lab": {
          "title": "Set Up IAM Identity Center with Permission Sets",
          "steps": [
            "In your AWS account, search 'IAM Identity Center' → Enable it (choose your region — must be consistent)",
            "If prompted about AWS Organizations: Enable Organizations (free, no extra cost)",
            "Create a test user in Identity Center: Users → Add user → fill in details → send email invitation to yourself",
            "Create a Permission Set: Permission Sets → Create → Custom permission set",
            "  Name: 'ReadOnly-DevAccess'",
            "  Add managed policy: ReadOnlyAccess",
            "  Add inline policy (JSON): Additionally allow: ec2:StartInstances, ec2:StopInstances (to simulate dev permissions)",
            "Create another Permission Set: 'Admin-FullAccess' → use AdministratorAccess managed policy",
            "Assign users to accounts: Multi-account permissions → AWS accounts → Select your account",
            "  Assign your test user → Select ReadOnly-DevAccess permission set → Assign",
            "Access the Identity Center user portal: https://[your-subdomain].awsapps.com/start",
            "Sign in as your test user → You should see your AWS account → Click it → Select the permission set → AWS Console opens",
            "Verify: try to create an EC2 instance (should succeed per dev permissions), then try to create an IAM user (should be blocked by ReadOnly)",
            "Back in Identity Center: assign yourself Admin-FullAccess to the same account",
            "Note: you now have TWO permission sets on the same account → Access portal shows two role options",
            "Document: the URL structure and how a developer would access the CLI using Identity Center (hint: aws configure sso)"
          ]
        },
        "resources": [
          {
            "label": "AWS IAM Identity Center User Guide",
            "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/"
          },
          {
            "label": "AWS: ABAC with Identity Center",
            "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/abac.html"
          }
        ],
        "quiz": [
          "What is the difference between IAM Users and IAM Identity Center users?",
          "What is a Permission Set and how does it differ from an IAM Policy?",
          "How does SCIM provisioning work with an external IdP in Identity Center?",
          "Why is Identity Center preferable to creating IAM users in every AWS account in a multi-account org?",
          "A developer needs different levels of access (ReadOnly vs Admin) in the same AWS account. How do you configure this?"
        ]
      },
      {
        "day": 4,
        "title": "AWS IAM Advanced — Permission Boundaries & Least Privilege at Scale",
        "concepts": [
          {
            "heading": "Permission Boundaries",
            "body": "A Permission Boundary is a policy attached to an IAM identity that defines the MAXIMUM permissions that identity can ever have — regardless of what other policies are attached. The effective permissions are the intersection of permission boundary and identity policies.\nExample: You have an identity policy allowing AdministratorAccess. If you also have a permission boundary restricting to only EC2 and S3 actions, the effective permissions are ONLY EC2 and S3 — even though the identity policy says full admin.\nUse case: Delegating IAM administration. You can allow a team to create their own IAM roles, but attach a permission boundary that prevents them from creating roles with more permissions than they themselves have. Prevents privilege escalation."
          },
          {
            "heading": "AWS Organizations & SCPs",
            "body": "AWS Organizations lets you manage multiple AWS accounts as a hierarchy. Service Control Policies (SCPs) are the guardrails applied at the Organization Unit (OU) or account level — they define the MAXIMUM permissions available in those accounts, overriding individual IAM policies.\nPractical SCPs to implement:\n• Deny leaving the Organization\n• Restrict to specific AWS regions\n• Prevent disabling CloudTrail or GuardDuty\n• Prevent creating IAM users (force Identity Center usage)\n• Prevent purchasing Reserved Instances without approval\nSCPs are the single most powerful governance control in AWS multi-account environments."
          },
          {
            "heading": "AWS CloudTrail — The Audit Log",
            "body": "CloudTrail records every API call made in your AWS account — who called what, from where, at what time, on which resource. Every IAM action, every EC2 launch, every S3 access — all logged.\nKey points:\n• Enabled by default for 90 days in the console (limited) — create a Trail for persistent logging to S3\n• Management events vs Data events: Management events (IAM changes, instance starts) vs Data events (individual S3 object access, Lambda invocations) — Data events must be explicitly enabled and have cost implications\n• Log Integrity: Use log file validation so you can prove logs haven't been tampered with\n• Alert on suspicious activity: CloudTrail → EventBridge → SNS/Lambda for real-time alerting on high-risk API calls"
          },
          {
            "heading": "IAM Access Analyzer",
            "body": "IAM Access Analyzer identifies resources that are shared with external principals (accounts outside your Organization, public internet). It analyses resource-based policies and highlights anything accessible from outside. Run Access Analyzer regularly and treat any finding as requiring review. It also validates policies (checks for syntax errors and logical issues) and generates least-privilege policies from CloudTrail activity data — very powerful for retrofitting least privilege."
          }
        ],
        "lab": {
          "title": "Least-Privilege Lambda Policy & CloudTrail Setup",
          "steps": [
            "Enable CloudTrail: Search 'CloudTrail' → Create trail → Name: 'iam-lab-trail'",
            "  Trail log to S3: Create new bucket | Enable log file validation | Include management events: All",
            "Create a Lambda function: Search 'Lambda' → Create function → Author from scratch",
            "  Name: iam-lab-function | Runtime: Python 3.12 | Execution role: Create new role",
            "In the Lambda function code, replace the default with:",
            "  import boto3",
            "  def lambda_handler(event, context):",
            "      s3 = boto3.client('s3')",
            "      response = s3.list_objects_v2(Bucket='iam-lab-[yourname]-2024')",
            "      return {'statusCode': 200, 'body': str(response)}",
            "Save and Deploy the function",
            "Go to the Lambda execution role (IAM → Roles → find the role Lambda created)",
            "Replace the default broad policy with a minimal policy (JSON):",
            "  Allow: s3:ListBucket on arn:aws:s3:::iam-lab-[yourname]-2024",
            "  Allow: logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents on arn:aws:logs:*:*:*",
            "Test the Lambda function — it should succeed",
            "Now enable IAM Access Analyzer: IAM → Access Analyzer → Create analyzer → Zone of trust: Your account",
            "Review any findings. Check your S3 bucket for public access findings.",
            "View CloudTrail: Events History → filter by Event source: lambda.amazonaws.com → find your function invocation. Document what metadata is captured."
          ]
        },
        "resources": [
          {
            "label": "AWS: Permission Boundaries Deep Dive",
            "url": "https://aws.amazon.com/blogs/security/delegate-permission-management-to-developers-using-iam-permissions-boundaries/"
          },
          {
            "label": "AWS CloudTrail Documentation",
            "url": "https://docs.aws.amazon.com/cloudtrail/"
          },
          {
            "label": "AWS IAM Access Analyzer",
            "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html"
          }
        ],
        "quiz": [
          "Explain Permission Boundaries using a real-world analogy. When would you use them?",
          "What is an SCP in AWS Organizations and how does it differ from an IAM policy?",
          "CloudTrail shows an API call: iam:CreateUser, sourceIPAddress: 198.51.100.1, eventTime: 03:00 UTC. What is concerning about this?",
          "What is the difference between management events and data events in CloudTrail?",
          "How would you use IAM Access Analyzer to implement least privilege on an existing application?"
        ]
      },
      {
        "day": 5,
        "title": "Workload Identity & Non-Human Identities — The New Frontier",
        "concepts": [
          {
            "heading": "The Non-Human Identity Problem",
            "body": "In modern enterprises, non-human identities (NHIs) — service accounts, API keys, certificates, OAuth tokens, CI/CD pipeline credentials, AI agent identities — outnumber human identities by approximately 50:1. Yet most IAM programs are built around managing human users. NHIs are the fastest-growing attack surface in cloud environments: they often have excessive permissions, their credentials are long-lived, they are rarely reviewed, and they are frequently forgotten when a project ends."
          },
          {
            "heading": "Types of Non-Human Identities",
            "body": "• Service Accounts: Accounts used by applications and background processes\n• API Keys/Access Keys: Long-term static credentials for programmatic access\n• Service Principals: Application identities in Azure AD for OAuth/OIDC flows\n• Managed Identities: Azure's credential-free service identity (similar to AWS EC2 roles)\n• IAM Roles for Service Accounts (IRSA): Kubernetes workloads in AWS EKS using OIDC to assume IAM roles\n• GitHub Actions OIDC: CI/CD pipelines assuming AWS/Azure roles without storing credentials\n• AI Agent Identities: Emerging — autonomous AI systems that need governed, auditable access to external systems"
          },
          {
            "heading": "Workload Identity Federation",
            "body": "Workload Identity Federation (WIF) allows external workloads (GitHub Actions, Google Cloud, Kubernetes) to assume cloud identities WITHOUT storing long-term credentials. They present short-lived OIDC tokens from their native platform, and the cloud IdP (AWS, Azure) validates the token against a configured trust relationship and issues temporary credentials.\nExample — GitHub Actions to AWS:\n1. GitHub OIDC provider is registered in AWS IAM\n2. An IAM Role trusts GitHub's OIDC provider, scoped to a specific repo\n3. In the GitHub workflow, no secrets stored — just call sts:AssumeRoleWithWebIdentity\n4. AWS validates the OIDC token, issues temporary credentials\nThis pattern eliminates ALL long-term credentials from CI/CD pipelines — a major security improvement."
          },
          {
            "heading": "AI Agent Identities — The Emerging IAM Challenge",
            "body": "Agentic AI systems (like those built with Claude or LangChain) need identities to access external systems: databases, APIs, cloud services, file stores. The IAM principles are the same but the implementation challenges are new:\n• Agents may spawn sub-agents — each needs its own scoped identity\n• Agent sessions are ephemeral but actions are persistent — audit trails are critical\n• Agents should follow least privilege — only the permissions needed for the current task\n• Human oversight must be maintained — high-risk actions should require human approval\n• Emergency revocation — instant ability to cut off an agent's access\nThis is where your dual background (app developer + IAM) becomes a genuine differentiator."
          }
        ],
        "lab": {
          "title": "Configure GitHub Actions OIDC with AWS (Credential-Free CI/CD)",
          "steps": [
            "Create a public GitHub repository (or use an existing one)",
            "In AWS IAM: Identity Providers → Add provider → OpenID Connect",
            "  Provider URL: https://token.actions.githubusercontent.com",
            "  Audience: sts.amazonaws.com",
            "  Click 'Get thumbprint' → Add provider",
            "Create an IAM Role for GitHub Actions:",
            "  IAM → Roles → Create → Web identity → Select the GitHub OIDC provider → Audience: sts.amazonaws.com",
            "  Add condition: token.actions.githubusercontent.com:sub = repo:[your-github-username]/[your-repo]:*",
            "  Attach permissions: ReadOnlyAccess (safe for testing)",
            "  Name: GitHubActions-ReadOnly",
            "  Note the Role ARN",
            "In your GitHub repo: create file .github/workflows/aws-test.yml with:",
            "  name: AWS OIDC Test",
            "  on: [push]",
            "  permissions: id-token: write | contents: read",
            "  jobs: test: runs-on: ubuntu-latest",
            "  steps:",
            "    - uses: aws-actions/configure-aws-credentials@v4",
            "      with: role-to-assume: [your-role-ARN] | aws-region: eu-west-1",
            "    - run: aws sts get-caller-identity",
            "    - run: aws s3 ls",
            "Push to GitHub → Actions tab → observe the workflow run → verify NO secrets were needed",
            "In CloudTrail: find the AssumeRoleWithWebIdentity event — note the GitHub actor in the session context",
            "Document: Compare this to the old approach (storing AWS_ACCESS_KEY_ID in GitHub Secrets) — what are the security improvements?"
          ]
        },
        "resources": [
          {
            "label": "GitHub: Configuring OIDC with AWS",
            "url": "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services"
          },
          {
            "label": "AWS: Workload Identity Best Practices",
            "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#bp-workloads-use-roles"
          },
          {
            "label": "Anthropic: Model Context Protocol (MCP)",
            "url": "https://docs.anthropic.com/en/docs/build-with-claude/mcp"
          }
        ],
        "quiz": [
          "Why do non-human identities represent a greater attack surface than human identities in most cloud environments?",
          "What is Workload Identity Federation and why does it eliminate the need for stored credentials in CI/CD?",
          "An AI agent is building a report by querying three different APIs. What IAM principles should govern its access?",
          "What is IRSA (IAM Roles for Service Accounts) in the context of Kubernetes?",
          "Design an identity model for an agentic AI that needs to read from S3 and write summaries to a database. What permissions, time limits, and monitoring would you put in place?"
        ]
      }
    ]
  },
  {
    "week": 4,
    "title": "Federation, Protocols & SSO Architecture",
    "theme": "Understand how identity flows between systems using SAML, OAuth 2.0, and OIDC — the foundation of expert IAM.",
    "days": [
      {
        "day": 1,
        "title": "SAML 2.0 — Enterprise Federation Protocol",
        "concepts": [
          {
            "heading": "What is SAML 2.0?",
            "body": "Security Assertion Markup Language (SAML) 2.0 is an XML-based open standard for exchanging authentication and authorisation data between parties. It is the dominant protocol for enterprise SSO, particularly for legacy and business-critical applications (Salesforce, Workday, ServiceNow, SAP, Oracle). SAML was published in 2005 and despite its age, it remains fundamental to enterprise IAM."
          },
          {
            "heading": "SAML Roles: IdP and SP",
            "body": "• Identity Provider (IdP): The trusted authority that authenticates users and issues SAML assertions (e.g., Entra ID, Okta, ADFS). The IdP knows who the user is.\n• Service Provider (SP): The application that relies on the IdP for authentication (e.g., Salesforce, Zoom, AWS). The SP trusts the IdP's assertion.\n• SAML Assertion: XML document the IdP issues, stating: 'This user is authenticated, here are their attributes, this assertion is valid until [time].' Digitally signed by the IdP."
          },
          {
            "heading": "SP-Initiated vs IdP-Initiated SSO",
            "body": "SP-Initiated (most common):\n1. User tries to access app.salesforce.com\n2. Salesforce (SP) detects unauthenticated user, generates AuthnRequest\n3. Redirect to IdP (e.g., login.microsoftonline.com) with the AuthnRequest\n4. User authenticates at IdP (+ MFA)\n5. IdP generates SAML Response (containing assertion) → POST to Salesforce's ACS URL\n6. Salesforce validates signature, extracts user attributes, creates session\n\nIdP-Initiated:\n1. User goes directly to IdP portal (like the M365 Apps page)\n2. Clicks on Salesforce tile\n3. IdP generates assertion → POST to Salesforce ACS URL\n4. User is logged in without entering any Salesforce credentials"
          },
          {
            "heading": "SAML Assertion Contents",
            "body": "A SAML assertion contains:\n• Subject: Who is authenticated (typically NameID — username or email)\n• Authentication Statement: When and how they authenticated\n• Attribute Statements: Additional attributes being passed (FirstName, LastName, Email, Groups, Role)\n• Conditions: Validity time window, Audience (which SP this assertion is for)\n• Signature: Digital signature from IdP's signing certificate\nAttribute mapping matters enormously: if Salesforce expects a 'Role' attribute to assign permissions and your IdP sends 'groups' instead, users will have wrong or no access. Correctly mapping IdP attributes to SP expectations is a major part of SAML integration work."
          }
        ],
        "lab": {
          "title": "Configure SAML SSO with a Real Application",
          "steps": [
            "In your M365 dev tenant: Entra ID → Enterprise Applications → New application",
            "Search for 'AWS IAM Identity Center' (or use a simpler app like Slack or GitHub if you have accounts)",
            "If using a simple app: search 'SAML Tracer' browser extension and install it in Chrome/Firefox",
            "For a no-account-needed test: In Entra ID → Enterprise Applications → Create your own application → Non-gallery",
            "  Name: 'SAML Test App' → Select 'Integrate any other application you don't find in the gallery'",
            "Click 'Set up single sign on' → SAML",
            "Configure Basic SAML Configuration:",
            "  Identifier (Entity ID): https://samltest.id/saml/sp",
            "  Reply URL (ACS URL): https://samltest.id/idp/profile/SAML2/POST/SSO",
            "  Note: SAMLtest.id is a free SAML testing service",
            "Download the Federation Metadata XML from Entra ID → save for reference",
            "Go to samltest.id → 'Upload metadata' → upload your Entra ID Federation Metadata XML",
            "Initiate test login from samltest.id → you'll be redirected to Microsoft login",
            "Open SAML Tracer browser extension → perform the login → observe the SAML Request (AuthnRequest from SP) and SAML Response (assertion from Entra ID)",
            "In SAML Tracer: find the SAML response → decode the Base64 → read the XML assertion",
            "Identify: NameID, AttributeStatements, Conditions/NotBefore/NotOnOrAfter, Signature element"
          ]
        },
        "resources": [
          {
            "label": "SAML Tracer (browser extension)",
            "url": "https://addons.mozilla.org/en-US/firefox/addon/saml-tracer/"
          },
          {
            "label": "SAMLtest.id (free SAML testing)",
            "url": "https://samltest.id"
          },
          {
            "label": "OASIS SAML 2.0 Primer",
            "url": "https://www.oasis-open.org/committees/download.php/27819/sstc-saml-tech-overview-2.0-cd-02.pdf"
          }
        ],
        "quiz": [
          "What is the role of the ACS URL in SAML SSO?",
          "What is the difference between SP-initiated and IdP-initiated SSO?",
          "Why is the digital signature on a SAML assertion critical to security?",
          "An application uses SAML for SSO. Users authenticate fine but have wrong permissions inside the app. What is the most likely cause?",
          "SAML assertions have a NotBefore and NotOnOrAfter time condition. What attack do these prevent?"
        ]
      },
      {
        "day": 2,
        "title": "OAuth 2.0 — Delegated Authorisation",
        "concepts": [
          {
            "heading": "What OAuth 2.0 Is and Isn't",
            "body": "OAuth 2.0 is an AUTHORISATION framework — not an authentication protocol. It allows a user to grant an application limited access to their resources on another service, without sharing their credentials. The classic example: 'Sign in with Google' to a third-party app. The user grants the app access to their Google profile — they don't give the app their Google password. OAuth 2.0 defines how this delegation of access works."
          },
          {
            "heading": "OAuth 2.0 Roles",
            "body": "• Resource Owner: The user who owns the data (you)\n• Client: The application requesting access (the third-party app)\n• Resource Server: The API serving the protected data (Google's API)\n• Authorisation Server: Issues access tokens after authenticating the resource owner (Google's auth server, Entra ID, Okta)\nThe Client never sees the Resource Owner's credentials — they only get tokens from the Authorisation Server."
          },
          {
            "heading": "The Authorisation Code Flow (PKCE)",
            "body": "The most secure and recommended flow for web/mobile apps:\n1. User clicks 'Connect to Google' in your app\n2. App redirects to Google's authorisation endpoint with: client_id, redirect_uri, scope, state, code_challenge (PKCE)\n3. User logs in to Google and approves the requested scopes\n4. Google redirects back to your app with an authorisation code\n5. App exchanges code + code_verifier (PKCE) for access token (server-to-server call)\n6. Access token is returned — time-limited, scoped to requested permissions\n7. App uses access token to call Google API on user's behalf\nPKCE (Proof Key for Code Exchange) prevents authorisation code interception attacks — critical for mobile and SPAs."
          },
          {
            "heading": "Scopes and Tokens",
            "body": "Scopes define what access is requested: 'read:email', 'write:calendar', 'openid', 'profile'. The user sees these on the consent screen and approves specific scopes — not blanket access to everything.\nToken types:\n• Access Token: Credential to call the API. Short-lived (minutes to hours). Bearer token.\n• Refresh Token: Long-lived token to obtain new access tokens without re-authenticating. Must be stored securely — if stolen, the attacker can get access tokens indefinitely.\n• ID Token (OIDC): JWT containing user identity information (see Day 3)."
          }
        ],
        "lab": {
          "title": "OAuth 2.0 Flow with the Microsoft Graph API",
          "steps": [
            "In your M365 dev tenant: Entra ID → App Registrations → New Registration",
            "  Name: OAuth-Lab-Client | Account type: Single tenant | Redirect URI: Web → https://oauth.pstmn.io/v1/callback",
            "After creation: note the Application (client) ID and Directory (tenant) ID",
            "Add API permissions: API Permissions → Add a permission → Microsoft Graph → Delegated → User.Read, Mail.Read → Add",
            "Create a client secret: Certificates & Secrets → New client secret → 12 months → note the secret VALUE (only shown once)",
            "Open Postman (download free from postman.com)",
            "Create a new request: GET https://graph.microsoft.com/v1.0/me",
            "Go to Authorization tab → OAuth 2.0 → Configure New Token:",
            "  Callback URL: https://oauth.pstmn.io/v1/callback",
            "  Auth URL: https://login.microsoftonline.com/[your-tenant-id]/oauth2/v2.0/authorize",
            "  Access Token URL: https://login.microsoftonline.com/[your-tenant-id]/oauth2/v2.0/token",
            "  Client ID: [your app's client ID]",
            "  Client Secret: [your secret]",
            "  Scope: openid profile User.Read Mail.Read",
            "Click 'Get New Access Token' → a browser window opens → log in with your M365 account → consent to permissions",
            "Postman receives the access token → click 'Use Token' → Send the GET request",
            "You should receive your user profile from Microsoft Graph",
            "Copy the access token and paste into jwt.io — decode it. Read the claims: iss, aud, exp, scp (scopes), roles"
          ]
        },
        "resources": [
          {
            "label": "OAuth 2.0 Playground (Google)",
            "url": "https://developers.google.com/oauthplayground/"
          },
          {
            "label": "jwt.io — JWT Decoder",
            "url": "https://jwt.io"
          },
          {
            "label": "OAuth 2.0 Security Best Practices (RFC 9700)",
            "url": "https://datatracker.ietf.org/doc/html/rfc9700"
          }
        ],
        "quiz": [
          "OAuth 2.0 is an authorisation framework, not an authentication protocol. What does this distinction mean?",
          "What is PKCE and what attack does it prevent?",
          "Explain the difference between an access token and a refresh token. Which is more sensitive and why?",
          "A user grants your app 'read:email' scope. Six months later your app tries to delete their calendar events. What happens?",
          "Why should refresh tokens never be stored in browser localStorage?"
        ]
      },
      {
        "day": 3,
        "title": "OpenID Connect (OIDC) — Authentication on Top of OAuth",
        "concepts": [
          {
            "heading": "OIDC: Adding Authentication to OAuth",
            "body": "OpenID Connect (OIDC) is an authentication layer built on top of OAuth 2.0. OAuth alone can't tell you WHO the user is — it just provides tokens to access resources. OIDC adds an ID Token (a JWT) that contains claims about the user's identity. When you click 'Sign in with Google' and Google tells your app that you are user@gmail.com, that is OIDC in action."
          },
          {
            "heading": "The ID Token",
            "body": "An ID Token is a JSON Web Token (JWT) — a Base64-encoded, digitally-signed JSON object with three parts: Header.Payload.Signature. Standard claims in the payload:\n• sub: Subject — unique identifier for the user at this IdP (not their email — an opaque identifier)\n• iss: Issuer — who issued the token (e.g., https://accounts.google.com)\n• aud: Audience — your client_id (the token is for your app specifically)\n• exp: Expiry — Unix timestamp\n• iat: Issued-at — Unix timestamp\n• email, name, picture: Optional profile claims\nThe application MUST validate: signature (using IdP's public keys), issuer, audience, and expiry before trusting any claims."
          },
          {
            "heading": "OIDC Discovery",
            "body": "Every OIDC-compliant IdP publishes a discovery document at [issuer]/.well-known/openid-configuration. This JSON document contains all the information needed to interact with the IdP: authorisation endpoint, token endpoint, public key endpoint (JWKS URI), supported scopes, etc. Applications auto-configure using this document rather than hardcoding endpoints. Try: https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration"
          },
          {
            "heading": "SAML vs OAuth vs OIDC — The Decision Matrix",
            "body": "• Legacy enterprise SaaS apps (Salesforce, SAP, Workday): SAML 2.0 — these applications predate OAuth and expect SAML\n• Modern web/mobile app authentication: OIDC — lightweight, JSON-based, mobile-friendly\n• API authorisation (delegated access): OAuth 2.0 — accessing APIs on behalf of a user\n• Machine-to-machine API access: OAuth 2.0 Client Credentials flow — no user involved\n• CI/CD pipeline cloud access: OIDC (Workload Identity Federation) — GitHub → AWS/Azure\nIn practice, your enterprise will use all three. Knowing when to use which is a key senior IAM skill."
          }
        ],
        "lab": {
          "title": "Integrate OIDC with Auth0 Sample Application",
          "steps": [
            "Sign up for a free Auth0 account at auth0.com",
            "In Auth0 dashboard: Applications → Create Application → Single Page Application → React",
            "Click 'Quick Start' → Download the React sample application",
            "Install Node.js (nodejs.org) if not already installed",
            "In terminal: cd to the downloaded sample → npm install → npm start",
            "The app runs at http://localhost:3000 — click 'Log In'",
            "You'll be redirected to Auth0's Universal Login page — log in with your Auth0 account",
            "After login, you're redirected back to the app — your profile is displayed",
            "Open browser DevTools → Network tab → find the token endpoint call → look at the response",
            "Find the id_token in the response → copy it → decode at jwt.io",
            "Read the claims: sub, iss, aud, exp, email",
            "In Auth0 dashboard: Authentication → Social → Enable Google (or GitHub) login",
            "Add a 'Rule' (or Action): Auth0 → Actions → Flows → Login → Add action:",
            "  Custom action that adds a custom claim: event.user.app_metadata → exports.onExecutePostLogin",
            "  This demonstrates adding custom claims to the ID token (e.g., user roles from a database)",
            "Document: Compare the SAML assertion XML from Day 1 to this OIDC ID Token JWT — note the structural differences"
          ]
        },
        "resources": [
          {
            "label": "Auth0 Documentation",
            "url": "https://auth0.com/docs"
          },
          {
            "label": "OpenID Connect Specification",
            "url": "https://openid.net/connect/"
          },
          {
            "label": "Microsoft OIDC Quickstarts",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-web-app-nodejs-msal-sign-in"
          }
        ],
        "quiz": [
          "What does OIDC add to OAuth 2.0 that OAuth alone cannot provide?",
          "List 5 standard claims in an OIDC ID Token and explain each.",
          "What is the OIDC Discovery Document and why is it useful for application developers?",
          "An application receives an ID Token. What validations MUST it perform before trusting the claims?",
          "You're building a new B2C mobile app where users sign in with Google or Apple. Which protocol do you use and why?"
        ]
      },
      {
        "day": 4,
        "title": "Cross-Cloud Federation — Azure AD to AWS",
        "concepts": [
          {
            "heading": "Why Cross-Cloud Federation Matters",
            "body": "Most enterprises use more than one cloud provider. Rather than maintaining separate user accounts and access keys in every cloud, you can federate — use your existing Azure AD identities to access AWS, GCP, or any SAML/OIDC-compatible system. Benefits: single source of truth for identity, centralised access revocation, unified MFA enforcement, fewer credentials to manage and potentially leak."
          },
          {
            "heading": "The Architecture: Azure AD as External IdP for AWS",
            "body": "When you configure Azure AD as an external IdP for AWS IAM Identity Center:\n1. Azure AD is the authoritative identity source\n2. Users authenticate in Azure AD (with Entra ID Conditional Access, MFA, etc.)\n3. SCIM provisioning automatically syncs Azure AD groups to Identity Center\n4. You assign AWS Permission Sets to Azure AD groups\n5. Users access AWS via the Identity Center portal, but authenticate against Azure AD\n6. The same user who uses their Microsoft 365 account can access AWS with the same credentials and MFA\nThis means: HR terminates someone in Azure AD → their Azure AD account is disabled → they immediately lose access to both Microsoft 365 AND all AWS accounts that use Identity Center."
          },
          {
            "heading": "SCIM Provisioning",
            "body": "System for Cross-domain Identity Management (SCIM) is an open standard (RFC 7643/7644) for automating user provisioning. It defines REST API endpoints that Identity Providers (Azure AD, Okta) use to create/update/delete users and groups in target systems (AWS Identity Center, Salesforce, ServiceNow, etc.). Without SCIM, you'd have to manually create every user in every system. With SCIM, create the user once in your IdP and they're automatically provisioned (and deprovisioned) everywhere."
          }
        ],
        "lab": {
          "title": "Federate Azure AD as External IdP for AWS Identity Center",
          "steps": [
            "In your M365 dev tenant: Entra ID → Enterprise Applications → New Application",
            "Search for 'AWS IAM Identity Center' in the gallery → Add it",
            "In the AWS IAM Identity Center app: Set up SSO → SAML",
            "Download the Certificate (Base64) and copy the Login URL and Entra Entity ID",
            "In AWS IAM Identity Center: Settings → Identity Source → Actions → Change Identity Source",
            "Select 'External Identity Provider' → Note the AWS Access Portal sign-in URL and ACS URL",
            "Back in Entra ID SAML config: fill in the AWS Service Provider details (Entity ID and ACS URL from step 6)",
            "Attribute mapping in Entra ID: map email → Subject, givenName → firstName, surname → lastName, displayName → displayName",
            "Enable the Entra ID app for SCIM provisioning: Provisioning → Automatic → enter AWS SCIM endpoint and token (from AWS Identity Center Settings)",
            "In the Provisioning 'Mappings': ensure user.userprincipalname maps to userName",
            "Start provisioning: Turn on 'Provisioning Status'",
            "Wait for sync: In AWS Identity Center → Users → your Azure AD users should appear",
            "Assign a user to a Permission Set on your AWS account",
            "Test: go to the AWS Access Portal → sign in using your M365 credentials → should reach AWS console via Entra ID authentication",
            "Document the full end-to-end flow with screenshots: Azure login → AWS console access"
          ]
        },
        "resources": [
          {
            "label": "AWS: Configure Azure AD as external IdP for IAM Identity Center",
            "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/gs-ad-azure.html"
          },
          {
            "label": "Microsoft: Tutorial for Azure AD + AWS SSO",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/saas-apps/amazon-web-service-tutorial"
          }
        ],
        "quiz": [
          "What is the benefit of using Azure AD as the IdP for AWS access rather than native IAM users?",
          "What is SCIM and how does it automate the joiners/leavers process across cloud platforms?",
          "If an employee's Azure AD account is disabled, what happens to their AWS access when federated via Identity Center?",
          "What is the trust relationship between Azure AD and AWS in this federation? What protocol is used?",
          "A user can authenticate to the Identity Center portal but gets 'Permission Denied' in the AWS console. What are the likely causes?"
        ]
      },
      {
        "day": 5,
        "title": "Zero Trust Architecture — The Philosophy, Not the Product",
        "concepts": [
          {
            "heading": "Zero Trust: The Paradigm Shift",
            "body": "Traditional security operated on a 'castle and moat' model — trust everything inside the perimeter, block everything outside. Zero Trust (coined by John Kindervag at Forrester in 2010) rejects the concept of a trusted perimeter entirely: 'Never trust, always verify — regardless of location.' Every access request, whether from inside the corporate network or from a coffee shop, is evaluated on its own merits. Zero Trust is not a product — it is an architectural philosophy implemented through many specific controls."
          },
          {
            "heading": "The Three Core Zero Trust Principles",
            "body": "1. VERIFY EXPLICITLY: Authenticate and authorise every access request using all available signals — user identity, location, device health, service/workload, data classification, anomaly detection. Never assume trust based on network location alone.\n2. USE LEAST PRIVILEGE ACCESS: Limit user access with just-enough and just-in-time access. Risk-based adaptive policies, data protection — use PIM, Conditional Access, ABAC.\n3. ASSUME BREACH: Minimise blast radius, segment access. Verify end-to-end encryption. Use analytics to detect anomalies. Design as if adversaries are already inside the network."
          },
          {
            "heading": "Zero Trust Pillars",
            "body": "NIST SP 800-207 defines Zero Trust across pillars:\n• Identity: Strong auth (MFA), verified before every access, privileged access managed (PIM)\n• Devices: Device health verified (compliance, MDM, certificates) before access\n• Networks: Micro-segmentation, no implicit trust on internal network, encrypted traffic\n• Applications: Application-layer access control (not network perimeter), app-level SSO and MFA\n• Data: Data classification, encryption in transit and at rest, data loss prevention\n• Visibility & Analytics: Continuous monitoring, SIEM/SOAR, behavioural analytics\nIAM sits at the centre of Zero Trust — identity is the new perimeter."
          },
          {
            "heading": "Zero Trust in Practice: What You've Already Built",
            "body": "Map your lab work so far to Zero Trust:\n• Conditional Access with MFA → Verify Explicitly (identity + device + location signals)\n• PIM Just-In-Time access → Least Privilege (time-limited, justified)\n• Named locations + device compliance → Device and Network pillar\n• CloudTrail + Entra ID sign-in logs → Visibility and Analytics\n• Permission Boundaries and SCPs → Assume Breach (limit blast radius)\nYou've been building Zero Trust all along. The philosophy gives it a framework."
          }
        ],
        "lab": {
          "title": "Build a Multi-Signal Zero Trust CA Policy",
          "steps": [
            "In Entra ID Conditional Access, create your most sophisticated policy yet: 'ZT-CRITICAL-Apps-FullProtection'",
            "Assignments: Specific users (your admin test users) | Target apps: Microsoft Azure Management + AWS Identity Center app",
            "Conditions:",
            "  Sign-in risk: Medium, High → grant block",
            "  Device platforms: Any",
            "  Locations: All locations EXCEPT Trusted (your home IP)",
            "  Client apps: All",
            "Grant controls: Require MFA AND Require compliant device (if Intune available) OR Require hybrid join",
            "Session controls: Sign-in frequency → Every 4 hours (force re-authentication for critical apps)",
            "Set policy to Report-only → review sign-in logs → observe which sign-ins would be affected",
            "In AWS: Create an SCP in Organizations (even with single account):",
            "  Create a policy that Denies CloudTrail:StopLogging and GuardDuty:DeleteDetector for all accounts",
            "  This implements 'Assume Breach' — attackers can't cover tracks by stopping audit logs",
            "Document: Write a 'Zero Trust Assessment' of your current lab environment. For each ZT pillar, rate yourself 1-5 and note what's missing."
          ]
        },
        "resources": [
          {
            "label": "NIST SP 800-207: Zero Trust Architecture",
            "url": "https://csrc.nist.gov/publications/detail/sp/800-207/final"
          },
          {
            "label": "Microsoft Zero Trust Guidance",
            "url": "https://learn.microsoft.com/en-us/security/zero-trust/"
          },
          {
            "label": "CISA Zero Trust Maturity Model v2",
            "url": "https://www.cisa.gov/zero-trust-maturity-model"
          }
        ],
        "quiz": [
          "Explain Zero Trust to a non-technical executive in two sentences.",
          "Why is 'identity the new perimeter' in a Zero Trust model?",
          "Map PIM, Conditional Access, and CloudTrail to specific Zero Trust principles.",
          "What is micro-segmentation and how does it implement 'assume breach'?",
          "A company has deployed MFA on all applications. Their CISO declares they are now 'Zero Trust'. Is this accurate? What's missing?"
        ]
      }
    ]
  },
  {
    "week": 5,
    "title": "Identity Governance, PAM & Privileged Access",
    "theme": "Master IGA, access reviews, SoD, and Privileged Access Management — the compliance and risk layer.",
    "days": [
      {
        "day": 1,
        "title": "Identity Governance & Administration (IGA)",
        "concepts": [
          {
            "heading": "What is IGA?",
            "body": "Identity Governance and Administration (IGA) is the discipline that ensures the right people have the right access, that access is appropriate, and that this can be demonstrated to auditors. It sits above operational IAM: while IAM provisions access, IGA ensures that provisioned access is legitimate, reviewed, and compliant. IGA is critical for regulated industries (banking, healthcare, government) where access decisions must be documented and auditable."
          },
          {
            "heading": "Access Certification / Access Reviews",
            "body": "Access Reviews (also called access certifications or attestation campaigns) are periodic processes where business owners review and confirm (or revoke) access rights in their systems. Typically run quarterly or annually. Process:\n1. Generate report of all access in scope\n2. Send to reviewers (managers, application owners)\n3. Reviewers approve or revoke each access item\n4. Revocations are actioned (automatically in mature programs, manually in others)\n5. Report is archived for audit evidence\nIn Entra ID: Identity Governance → Access Reviews handles this natively."
          },
          {
            "heading": "Entitlement Management",
            "body": "Entitlement Management automates the access request and approval process. Instead of ad-hoc email requests to IT ('please give me access to X'), employees use a self-service portal to request access packages — bundles of related access (group membership + application role + SharePoint site). The request goes through automated approval workflows (manager → application owner → security team). Access can be time-limited (auto-expires) or requires regular recertification. This is the 'modern service desk' for IAM — dramatically reduces IT overhead while improving auditability."
          },
          {
            "heading": "Role Mining and Role Engineering",
            "body": "In large organisations, determining what roles should exist is a major challenge. Role mining analyses actual access patterns from system logs to discover natural clusters — groups of users who have very similar access profiles. These clusters become the basis for role definitions. Role engineering is the manual/semi-automated process of designing roles that reflect business functions. The output: a Role Catalogue — the authoritative list of roles, their permissions, their owners, and who should be eligible."
          }
        ],
        "lab": {
          "title": "Configure Access Reviews and Entitlement Management",
          "steps": [
            "In Entra ID → Identity Governance → Access Reviews → New Access Review",
            "Review type: Teams + Groups | Group: SG-IAM-Students (or any group you created)",
            "Scope: All users | Reviewers: Selected users → add yourself as reviewer",
            "Recurrence: Weekly (for lab speed) | Duration: 3 days | Notifications: Enable",
            "Settings: Auto apply results | If reviewer doesn't respond → Remove access",
            "Start the review → go to myaccess.microsoft.com as the reviewer",
            "You'll see the group members listed — approve or deny each one with justification",
            "Back in admin portal: Access Reviews → review the progress and apply results",
            "Now: Identity Governance → Entitlement Management → Access Packages → New Access Package",
            "  Name: 'IAM Student Onboarding Package' | Catalog: General",
            "  Resources: Add your SG-IAM-Students group + the SAML Test App enterprise app",
            "  Requests: Allow users in your directory | Approval required: Yes → add yourself as approver",
            "  Lifecycle: Expire after 90 days",
            "Test: as a different user (your test user), go to myaccess.microsoft.com → Discover → request the Access Package",
            "As approver: approve the request → verify the user gained group membership and app assignment",
            "Document: the access request workflow — how this compares to a manual email-to-IT process"
          ]
        },
        "resources": [
          {
            "label": "Microsoft: Identity Governance documentation",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/governance/"
          },
          {
            "label": "Gartner IGA Market Guide (free summary articles available)",
            "url": "https://www.gartner.com/en/information-technology/glossary/identity-governance-and-administration"
          }
        ],
        "quiz": [
          "What is the difference between IAM (provisioning) and IGA (governance)?",
          "Why are access reviews important for compliance? Name two regulations that require them.",
          "What is an Access Package in Entra ID Entitlement Management?",
          "What is role mining and how does it differ from role engineering?",
          "Describe an access certification campaign from start to finish, including what happens to revoked access."
        ]
      },
      {
        "day": 2,
        "title": "Segregation of Duties (SoD) — Preventing Fraud",
        "concepts": [
          {
            "heading": "SoD Fundamentals",
            "body": "Segregation of Duties (SoD) is an internal control principle that divides critical business processes among multiple people so that no single individual can independently execute and conceal a fraudulent transaction. It originated in accounting/audit (Sarbanes-Oxley, SOX) but is now a fundamental control in any regulated IAM program.\nClassic SoD conflicts in IT/finance:\n• Can create vendors + Can approve vendor payments (procurement fraud)\n• Can create users + Can assign permissions (access abuse)\n• Can execute trades + Can approve trades (financial fraud)\n• Can modify application code + Can deploy to production (insider sabotage)"
          },
          {
            "heading": "SoD in IAM Systems",
            "body": "Implementing SoD in IAM requires:\n1. SoD Policy Definition: Document all conflicting permission combinations\n2. Detection: Scan existing user access against the SoD policy to identify violations\n3. Remediation: Resolve violations — remove one of the conflicting permissions\n4. Prevention: Block future provisioning that would create violations at the time of request\n5. Compensating Controls: Where true SoD is impractical (small team), implement monitoring, approval requirements, and enhanced logging instead\n\nChallenge: SoD must be defined at the application level (what actions in Salesforce, SAP, etc.) and then mapped to directory permissions. The mapping is often complex and organisation-specific."
          },
          {
            "heading": "SoD in Cloud Environments",
            "body": "In AWS, SoD can be enforced via:\n• Separate AWS accounts for different teams (developers can't touch production)\n• Permission Boundaries that prevent specific role combinations\n• SCPs at Organization level: deny certain action combinations\n• Required multi-person approval for sensitive operations via AWS Organisations delegated admin\n\nIn Azure/Entra ID:\n• PIM approval workflows requiring a second person for sensitive role activations\n• Conditional Access policies that restrict access to production based on role\n• Entra ID roles designed to separate: User Admin cannot also be Security Admin"
          }
        ],
        "lab": {
          "title": "Design and Document an SoD Policy",
          "steps": [
            "This is a design exercise — create a comprehensive SoD document for a fictional organisation 'BHCNATION Tech' that has:",
            "  AWS environment with: Billing, Developers, Security, Operations teams",
            "  Azure AD with M365 and several enterprise apps",
            "  A financial application with roles: AP_Create, AP_Approve, AR_Create, AR_Approve, User_Admin",
            "Design Task 1: List 8 SoD conflicts for the financial application roles above",
            "Design Task 2: For each conflict, specify: Conflict name | Role A | Role B | Business Risk | Mitigation",
            "Design Task 3: For AWS — identify which IAM permission combinations would violate SoD (e.g., iam:CreateUser + iam:AttachUserPolicy)",
            "Design Task 4: Create an SoD matrix (table): Roles on both axes. Where conflicts exist, mark the cell.",
            "Design Task 5: For one of your identified conflicts where SoD is impractical (small team member must have both), define a compensating control package: enhanced logging, supervisory review, periodic attestation.",
            "Save this as a formal document in your portfolio — SoD analysis is a highly valued skill for compliance/audit-facing IAM roles",
            "BONUS: In Entra ID, create a Custom Role that demonstrates SoD: User_Provisioner role that can create users but CANNOT modify security group membership (separating provisioning from access assignment)"
          ]
        },
        "resources": [
          {
            "label": "ISACA: SoD Best Practices",
            "url": "https://www.isaca.org/resources/isaca-journal/past-issues/2017/separation-of-duties-in-it"
          },
          {
            "label": "SailPoint: SoD in IGA (excellent primer)",
            "url": "https://www.sailpoint.com/identity-library/segregation-of-duties/"
          }
        ],
        "quiz": [
          "Why is SoD an internal control rather than purely a technical control?",
          "Give a real example of fraud that proper SoD would prevent.",
          "What is a compensating control and when would you use it instead of true SoD?",
          "How would you implement SoD between developers and production deployments in an AWS multi-account setup?",
          "A small startup has 3 IT staff who all need high-level access. SoD in the traditional sense is impossible. What do you do?"
        ]
      },
      {
        "day": 3,
        "title": "Privileged Access Management (PAM) — Enterprise Tools",
        "concepts": [
          {
            "heading": "What is Enterprise PAM?",
            "body": "Privileged Access Management (PAM) tools provide a dedicated vault, workflow, and session management layer for privileged credentials — root accounts, service account passwords, SSH keys, database admin credentials, network device passwords. PAM is a category of enterprise security product distinct from IAM platforms, though they are closely related. Market leaders: CyberArk, BeyondTrust, Thycotic (now Delinea), Hashicorp Vault."
          },
          {
            "heading": "Core PAM Capabilities",
            "body": "• Password Vault: Encrypted storage for privileged credentials. No human ever knows the actual password — they check it out from the vault.\n• Password Rotation: Automatic periodic rotation of credentials, eliminating stale passwords.\n• Session Recording: Full video/keystroke recording of privileged sessions — complete audit trail of everything a privileged user did.\n• Just-In-Time Provisioning: Grant privileged access only when needed, for a defined time window.\n• Least Privilege Elevation: Allow users to run specific elevated commands without giving them full admin access (e.g., run a specific restart script without having full root access).\n• Threat Analytics: Detect unusual privileged session behaviour — anomalous commands, access at unusual times, lateral movement patterns."
          },
          {
            "heading": "CyberArk Architecture Overview",
            "body": "CyberArk Privileged Access Security solution components:\n• Digital Vault (PrivateArk): The encrypted credential repository — the heart of the system. Air-gapped in high-security deployments.\n• Central Policy Manager (CPM): Automates password rotation on remote systems.\n• Privileged Session Manager (PSM): Acts as a jump server — users connect through it to targets. Records sessions. Users never connect directly to servers.\n• Password Vault Web Access (PVWA): Web interface for requesting, checking out, and managing passwords.\n• Privileged Session Manager for SSH (PSMP): SSH proxy for Linux/Unix privileged sessions."
          },
          {
            "heading": "HashiCorp Vault for Cloud-Native PAM",
            "body": "HashiCorp Vault is the cloud-native, API-first secrets management platform. It stores and dynamically generates secrets for infrastructure — API keys, database passwords, TLS certificates. Key difference from CyberArk: Vault generates dynamic credentials on-demand rather than storing static ones. Example: Instead of an application having a static database password that rarely changes, it requests a temporary database credential from Vault each time — valid for 1 hour, then automatically revoked. This is the ideal model for microservices and cloud-native applications. Free open-source version; commercial HCP Vault for enterprise."
          }
        ],
        "lab": {
          "title": "HashiCorp Vault — Secrets Management in Practice",
          "steps": [
            "Install HashiCorp Vault (free): vault.hashicorp.com/downloads — choose your OS",
            "Start Vault in dev mode (local, no persistence — for learning): vault server -dev",
            "Note the Root Token displayed in the output — save it temporarily",
            "Open a new terminal. Set environment variables:",
            "  export VAULT_ADDR='http://127.0.0.1:8200'",
            "  export VAULT_TOKEN='[root token from above]'",
            "Enable the KV (Key-Value) secrets engine: vault secrets enable -path=secret kv-v2",
            "Store a secret: vault kv put secret/myapp/database username='dbadmin' password='$(openssl rand -base64 20)'",
            "Read the secret: vault kv get secret/myapp/database",
            "Create a policy that only allows reading from myapp/database:",
            "  Create file myapp-policy.hcl: path 'secret/data/myapp/database' { capabilities = ['read'] }",
            "  vault policy write myapp-policy myapp-policy.hcl",
            "Create a token with only that policy: vault token create -policy=myapp-policy",
            "Export the new limited token: export VAULT_TOKEN='[new token]'",
            "Try: vault kv get secret/myapp/database → should succeed",
            "Try: vault kv put secret/myapp/database password='newpass' → should FAIL",
            "Try: vault kv get secret/otherapp/data → should FAIL",
            "This demonstrates least-privilege secrets access — the application token can only read its own secret",
            "Document: Compare this model to storing passwords in a config file or environment variable"
          ]
        },
        "resources": [
          {
            "label": "HashiCorp Vault Documentation",
            "url": "https://developer.hashicorp.com/vault/docs"
          },
          {
            "label": "CyberArk Architecture Overview",
            "url": "https://docs.cyberark.com/pam-self-hosted/latest/en/Content/PASIMP/PAS-Architecture.htm"
          },
          {
            "label": "BeyondTrust PAM Overview",
            "url": "https://www.beyondtrust.com/resources/glossary/privileged-access-management"
          }
        ],
        "quiz": [
          "What is the fundamental problem that enterprise PAM tools solve?",
          "What is session recording in PAM and why is it valuable for both security and compliance?",
          "Explain the difference between CyberArk's static credential vault model and HashiCorp Vault's dynamic secrets model.",
          "What is a jump server/bastion host and how does PAM enhance this concept?",
          "An application currently stores its database password in a .env file. Describe how you would migrate this to HashiCorp Vault."
        ]
      },
      {
        "day": 4,
        "title": "IAM Logging, SIEM Integration & Incident Response",
        "concepts": [
          {
            "heading": "IAM Logs Are Your Evidence Layer",
            "body": "Every IAM event generates log data. This data is the primary evidence for:\n• Security investigations (who did what, when?)\n• Compliance audits (prove access was appropriate)\n• Threat detection (anomaly detection, attack pattern recognition)\n• Forensics (reconstruct the attack chain after a breach)\nIAM teams must know what logs exist, where they are, how to query them, and how to set up automated alerting."
          },
          {
            "heading": "Key Log Sources",
            "body": "• Azure AD Sign-In Logs: Every authentication attempt, CA policy outcome, MFA result, device detail, risk score\n• Azure AD Audit Logs: All directory changes — user created, group modified, permission assigned, role activated\n• AWS CloudTrail: All API calls — IAM changes, resource creation, data access\n• AWS IAM Access Analyzer: Findings for externally-accessible resources\n• Active Directory Security Event Log: Event IDs 4624, 4625, 4648, 4720, 4726, 4732, 4771\n• HashiCorp Vault Audit Log: Every secret access, policy violation\n• Application Authentication Logs: App-specific auth events (SAML assertions, OIDC token issuances)"
          },
          {
            "heading": "Microsoft Sentinel for IAM Analytics",
            "body": "Microsoft Sentinel is a cloud-native SIEM/SOAR. It ingests logs from Azure AD, Office 365, AWS (via connector), and hundreds of other sources and applies analytics rules to detect threats. Built-in rules for IAM threats:\n• Impossible travel: User authenticated from London, then New York 10 minutes later\n• Mass access failure then success: Brute force then successful login\n• Privileged role assigned outside PIM: Someone added directly to Global Admin\n• New admin account created and used immediately\n• Account created and deleted within short window (covering tracks)"
          },
          {
            "heading": "IAM Incident Response",
            "body": "When a compromised account is detected:\n1. CONTAIN (minutes): Disable the account. Revoke all active sessions (revoke refresh tokens in Azure AD: Revoke-MgUserSignInSession). Reset credentials.\n2. INVESTIGATE (hours): Review sign-in logs for all activity from the account. Identify what was accessed. Look for lateral movement — did the attacker use this account to access other accounts?\n3. REMEDIATE (hours-days): Remove any persistence the attacker created (new accounts, new OAuth app grants, backdoor permissions). Review and tighten policies.\n4. RECOVER: Re-enable account with new credentials and enhanced monitoring. Require re-enrollment of MFA.\n5. LESSONS LEARNED: Document the incident. Update policies and detection rules to prevent recurrence."
          }
        ],
        "lab": {
          "title": "IAM Log Analysis — Detect Suspicious Activity",
          "steps": [
            "In Entra ID: Monitoring → Sign-in Logs",
            "Filter by: Status = Failure | review failed attempts against your tenant",
            "Filter by: Conditional Access = Failure | see which CA policies blocked attempts",
            "Export logs: at the top → Download (CSV) → download a sample for analysis",
            "Open the CSV in Excel/Google Sheets — identify: unique users, most common failure reasons, top source IPs",
            "In Entra ID: Monitoring → Audit Logs → filter by Category: Role Management",
            "Review: any PIM activations should appear here. Any direct role assignments outside PIM are suspicious.",
            "In AWS CloudTrail: Event History → filter by Event name: ConsoleLogin → review successful and failed logins",
            "Filter CloudTrail by Event name: AssumeRole → see all role assumption events",
            "Create a CloudWatch Metric Alarm: CloudTrail → CloudWatch → create metric filter for:",
            "  Filter pattern: {$.eventName = 'CreateUser' && $.userIdentity.type = 'IAMUser'}",
            "  Create alarm: when this metric > 0 → send SNS email notification",
            "This alerts you every time an IAM user is created — a high-risk event you want to know about immediately",
            "Simulate the alert: create a test IAM user → verify you receive the email notification within 5 minutes",
            "Document: Build a 'IAM Security Monitoring Runbook' — list 10 events you'd alert on and why"
          ]
        },
        "resources": [
          {
            "label": "Microsoft Sentinel GitHub (Community Detection Rules)",
            "url": "https://github.com/Azure/Azure-Sentinel"
          },
          {
            "label": "AWS Security Hub (managed security findings)",
            "url": "https://docs.aws.amazon.com/securityhub/"
          },
          {
            "label": "SANS: Identity-Based Incident Response",
            "url": "https://www.sans.org/reading-room/whitepapers/"
          }
        ],
        "quiz": [
          "What Entra ID sign-in log fields would you check first when investigating a suspected account compromise?",
          "What is 'impossible travel' in security analytics and why is it a strong indicator of compromise?",
          "Describe the first 3 steps of IAM incident response for a confirmed compromised account.",
          "How do you revoke all active sessions for a compromised user in Entra ID?",
          "Why should a CloudWatch alert fire when an IAM user is created, even in a lab environment?"
        ]
      },
      {
        "day": 5,
        "title": "SC-300 Certification Preparation — Microsoft Identity Administrator",
        "concepts": [
          {
            "heading": "Why SC-300?",
            "body": "The SC-300: Microsoft Certified Identity and Access Administrator Associate is the most directly relevant certification for your learning path. It validates exactly what you've been building: Entra ID, hybrid identity, MFA, Conditional Access, PIM, Identity Governance, entitlement management, and integration with external applications. It is recognised by every Microsoft-focused enterprise and increases salary significantly. Average exam time: 100-130 minutes, ~40-60 questions. Pass mark: 700/1000."
          },
          {
            "heading": "SC-300 Exam Domains",
            "body": "The SC-300 covers four main areas:\n1. Implement and manage user identities (25-30%): Users, groups, licenses, external identities, hybrid identity\n2. Implement authentication and access management (25-30%): MFA, Conditional Access, identity protection, PIM\n3. Implement access management for applications (15-20%): App registrations, enterprise apps, OAuth/OIDC/SAML SSO, consent\n4. Plan and implement identity governance (20-25%): Entitlement management, access reviews, privileged identity, monitoring"
          },
          {
            "heading": "What You've Already Covered",
            "body": "After Week 1-5 of this course, you have hands-on experience with the vast majority of SC-300 content. The certification will mostly be solidifying concepts you've already practiced, filling terminology gaps, and understanding Microsoft's recommended configurations and best practices. The remaining gaps for SC-300 primarily cover: External Identities / B2B collaboration, Identity Protection risk policies (requires P2), application consent framework in detail, and some governance edge cases."
          },
          {
            "heading": "Study Strategy for SC-300",
            "body": "1. Microsoft Learn SC-300 Learning Path: Free, official, directly mapped to exam. Do every module.\n2. John Savill's SC-300 Study Cram: Free YouTube video — excellent exam-focused overview.\n3. Practice Labs: Continue your Entra ID tenant work — every lab in this course prepares you.\n4. Practice Tests: MeasureUp or Whizlabs SC-300 practice exams — aim for 85%+ before booking.\n5. Exam scheduling: Book at pearsonvue.com/Microsoft — can be taken online at home.\n6. Consider combining with: AZ-900 (Azure fundamentals, easy win) or AZ-500 (Security Engineer, harder)."
          }
        ],
        "lab": {
          "title": "SC-300 Self-Assessment & Gap Analysis",
          "steps": [
            "Go to: learn.microsoft.com → search 'SC-300' → open the official SC-300 study guide",
            "Download the Skills Measured document (PDF) from the exam page — this is the definitive list of exam topics",
            "Create a spreadsheet with three columns: Topic | Confidence (1-5) | Lab Done? (Y/N)",
            "Go through every topic in the Skills Measured document and rate yourself",
            "Topics you rate 1-2: mark as 'Priority Study'",
            "For Priority Study topics: go to Microsoft Learn → find the specific module → study it",
            "Topics to specifically review from SC-300 that this course hasn't deeply covered yet:",
            "  - External Identities (B2B and B2C): Entra ID → External Identities → explore settings",
            "  - Identity Protection: Entra ID → Security → Identity Protection → review risk policies (P2 feature in your dev tenant)",
            "  - App consent and permissions: Entra ID → Enterprise Applications → User consent settings",
            "Go to Whizlabs or ExamTopics → take a free SC-300 practice test sample",
            "Note: which topics you got wrong → add to Priority Study list",
            "Set a target exam date: 4-6 weeks from now (after completing this course)",
            "Document your gap analysis in your portfolio — this shows methodical, self-directed learning"
          ]
        },
        "resources": [
          {
            "label": "Microsoft Learn SC-300 Learning Path (FREE)",
            "url": "https://learn.microsoft.com/en-us/certifications/exams/sc-300/"
          },
          {
            "label": "John Savill SC-300 Study Cram (YouTube)",
            "url": "https://www.youtube.com/results?search_query=SC-300+study+cram"
          },
          {
            "label": "MeasureUp SC-300 Practice Exams",
            "url": "https://www.measureup.com/sc-300-microsoft-certified-identity-and-access-administrator.html"
          }
        ],
        "quiz": [
          "What are the four domains of the SC-300 exam and their approximate weightings?",
          "What is Entra ID Identity Protection and how does it use risk signals differently from standard Conditional Access?",
          "What is Entra ID External Identities (B2B) and how does it differ from creating local user accounts for partners?",
          "What is the consent framework for OAuth applications in Entra ID? What is admin consent vs user consent?",
          "Outline your personal SC-300 study plan: what are your top 3 weak areas and how will you address each?"
        ]
      }
    ]
  },
  {
    "week": 6,
    "title": "Agentic AI, Non-Human Identities & MCP",
    "theme": "Master the emerging frontier where IAM meets agentic AI — your unique professional differentiator.",
    "days": [
      {
        "day": 1,
        "title": "Agentic AI & IAM — The Paradigm Collision",
        "concepts": [
          {
            "heading": "What Makes Agentic AI Different for IAM",
            "body": "Agentic AI systems don't just respond to queries — they take actions. They call APIs, access databases, send emails, create files, run code, and potentially spawn other agents to complete sub-tasks. Each of these actions requires access to resources. This turns the agent into an identity that needs governing — just like a human user or a service account, but with important differences:\n• Non-deterministic: Human users follow predictable patterns; agents may follow novel paths\n• Dynamic scope: The resources an agent needs may expand during task execution\n• Sub-agent delegation: An agent may create child agents — who is responsible for their access?\n• Long-running: Agents may persist for hours or days, not just a single session\n• High velocity: Agents can make thousands of API calls per minute — anomaly detection baselines are different"
          },
          {
            "heading": "The Non-Human Identity (NHI) Problem",
            "body": "Before AI agents, NHIs were mostly: service accounts, CI/CD pipelines, scheduled jobs. Now they include autonomous agents that can:\n• Read and write data across multiple systems simultaneously\n• Make decisions about which systems to access\n• Adapt their access patterns based on task requirements\nCurrent NHI failure modes in enterprise:\n• 65% of NHI credentials are never rotated\n• Average of 40+ cloud services per enterprise with forgotten service accounts\n• No inventory of what NHIs exist or what they can access\n• No lifecycle management — NHIs are rarely decommissioned\nFor AI agents: these risks are amplified because agents have higher autonomy and broader access needs."
          },
          {
            "heading": "IAM Design Principles for AI Agents",
            "body": "Applying traditional IAM principles to agentic systems:\n1. IDENTITY: Every agent gets a unique, distinct identity — not shared credentials. Agent identities are traceable to a human owner.\n2. LEAST PRIVILEGE: Agents receive scoped permissions for the specific task being executed, not broad persistent access. Access expires with the task.\n3. JUST-IN-TIME: Agent permissions are issued at task start and revoked at task completion.\n4. AUDIT TRAIL: Every action taken by an agent is logged with the agent's identity, timestamp, resource accessed, and action taken.\n5. HUMAN OVERSIGHT: High-risk actions (deleting data, sending external communications, financial transactions) require human approval, even for automated agents.\n6. EMERGENCY STOP: Ability to immediately revoke all permissions for an agent, kill active sessions, and stop all in-progress actions."
          },
          {
            "heading": "Model Context Protocol (MCP) — The Access Layer for AI",
            "body": "Anthropic's Model Context Protocol (MCP) is an open standard that defines how AI models (like Claude) interact with external tools and data sources. It is, in IAM terms, an authorization and access framework for AI agents. MCP defines:\n• Tools: Actions an agent can take (call an API, run a query, write a file)\n• Resources: Data sources the agent can read\n• Prompts: Reusable interaction patterns\nFrom an IAM perspective, an MCP server is a resource server. Access to it should be governed by the same principles as any other resource: authentication, authorisation, audit."
          }
        ],
        "lab": {
          "title": "Map AI Agent Access Patterns to IAM Controls",
          "steps": [
            "This is a design and research lab — critical for understanding the emerging field",
            "Read: Anthropic's MCP documentation at docs.anthropic.com/en/docs/build-with-claude/mcp",
            "Read: Anthropic's agent security guidelines at docs.anthropic.com/en/docs/build-with-claude/agents",
            "Design Exercise — Agent Identity Architecture:",
            "  Scenario: You are building a 'Financial Report Assistant' AI agent for BHCNATION Tech that:",
            "    - Reads transaction data from a read-only database",
            "    - Queries a third-party analytics API",
            "    - Generates a PDF report",
            "    - Emails the report to a specified recipient list",
            "  For this agent, design:",
            "    A) The identity model: What identity does this agent use? How is it provisioned?",
            "    B) The permission model: What is the minimum access required for each action?",
            "    C) Time-bounding: How long should permissions persist? When do they expire?",
            "    D) Audit requirements: What events must be logged?",
            "    E) Human oversight: Which actions require human approval before execution?",
            "    F) Emergency controls: How do you instantly stop this agent if it behaves unexpectedly?",
            "Document your design as a formal architecture document in your portfolio",
            "Research: Search for 'NIST AI 100-1' and review the trustworthy AI framework — note how IAM principles map to AI governance"
          ]
        },
        "resources": [
          {
            "label": "Anthropic MCP Documentation",
            "url": "https://docs.anthropic.com/en/docs/build-with-claude/mcp"
          },
          {
            "label": "NIST AI Risk Management Framework",
            "url": "https://www.nist.gov/system/files/documents/2023/01/26/AI RMF 1.0.pdf"
          },
          {
            "label": "Anthropic: Claude's approach to agentic contexts",
            "url": "https://docs.anthropic.com/en/docs/build-with-claude/agents"
          }
        ],
        "quiz": [
          "List three ways agentic AI creates IAM challenges that traditional service accounts do not.",
          "What is the Model Context Protocol and why is it relevant to IAM professionals?",
          "Apply the principle of least privilege to an AI agent that needs to query a database. What should and should not be in its permissions?",
          "What is an 'emergency stop' in agentic AI IAM and how would you implement it technically?",
          "Why is audit logging more important for AI agent identities than for human user accounts?"
        ]
      },
      {
        "day": 2,
        "title": "OAuth 2.0 for AI — Dynamic Client Registration & Token Binding",
        "concepts": [
          {
            "heading": "OAuth for AI Agent Authorization",
            "body": "AI agents that access user data on their behalf use OAuth 2.0 — the same protocol as any application. But there are important considerations:\n• An agent acting on behalf of a user should use delegated permissions (Authorization Code flow), not application permissions\n• The user should see exactly what the agent will access on the consent screen\n• Scopes should be narrowly defined — the agent should not have broader access than the specific task requires\n• Refresh tokens given to agents should have short lifetimes or be one-time-use\nThe principle: users should always be able to see what agents have authorised access to, and revoke it instantly."
          },
          {
            "heading": "Dynamic Client Registration (DCR)",
            "body": "For AI agents that are ephemeral (created for a specific task, then destroyed), Dynamic Client Registration allows the agent to register itself as an OAuth client programmatically, obtain credentials, perform its task, then deregister. This avoids: maintaining a registry of static application credentials; credentials that outlive the agent; and broad application credentials shared among multiple agents. RFC 7591 (OAuth DCR) and RFC 7592 (client management) define this."
          },
          {
            "heading": "Token Binding and Sender-Constrained Tokens",
            "body": "Standard OAuth bearer tokens are like cash — whoever holds them can use them. If an agent's token is stolen, it can be used by an attacker from anywhere. Token binding and sender-constrained tokens (DPoP — Demonstrating Proof of Possession, RFC 9449) tie the token to a specific client certificate or key. Only the legitimate holder — the agent that originally received the token — can use it. This is critical for high-security agent deployments."
          },
          {
            "heading": "Consent and Transparency for Agent Access",
            "body": "A core governance requirement: users must understand what AI agents have access to. Best practices:\n• Show a clear, specific consent screen when an agent requests access ('This agent will read your email to draft replies')\n• List active agent authorisations in a visible dashboard ('Agents with access to your account')\n• Allow granular revocation — revoke one agent without affecting others\n• Audit log of all actions taken by each agent, accessible to the user\nThis is both an ethical requirement (users deserve to know) and a regulatory one (GDPR requires transparency about automated processing)."
          }
        ],
        "lab": {
          "title": "Implement Scoped OAuth for an AI Agent Pattern",
          "steps": [
            "In your M365 dev tenant: Entra ID → App Registrations → New Registration",
            "Name: 'Agent-EmailDrafter' | Single tenant | No redirect URI (daemon/agent app)",
            "Add API Permissions: Microsoft Graph → Application permissions (not delegated — agent runs without user present)",
            "  Mail.Read (to read email for drafting) — NOT Mail.ReadWrite (agent should not modify email)",
            "  User.Read.All (to look up recipient details)",
            "Grant admin consent for the permissions",
            "Create a client secret: Certificates & Secrets → New client secret → 6 months",
            "Now critically: Create a second app registration 'Agent-EmailSender' with ONLY Mail.Send",
            "This demonstrates separation of agent functions — the reading agent and the sending agent are separate identities",
            "In PowerShell or Postman: get an access token using Client Credentials flow:",
            "  POST https://login.microsoftonline.com/[tenant-id]/oauth2/v2.0/token",
            "  Body: grant_type=client_credentials & client_id=[id] & client_secret=[secret] & scope=https://graph.microsoft.com/.default",
            "Decode the resulting access token at jwt.io — note: no 'sub' claim (no user), 'roles' claim shows app permissions",
            "Use the token to call: GET https://graph.microsoft.com/v1.0/users — returns all users in your tenant",
            "Now: add a Conditional Access policy restricting this app to specific named locations only",
            "Document: How does separating agent functions into distinct app registrations implement least privilege?"
          ]
        },
        "resources": [
          {
            "label": "RFC 9449: DPoP Sender-Constrained Tokens",
            "url": "https://datatracker.ietf.org/doc/html/rfc9449"
          },
          {
            "label": "Microsoft Graph API Documentation",
            "url": "https://docs.microsoft.com/en-us/graph/"
          },
          {
            "label": "OAuth 2.0 Client Credentials Flow",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow"
          }
        ],
        "quiz": [
          "What is the difference between delegated permissions and application permissions in OAuth? When should an AI agent use each?",
          "What is the security risk of bearer tokens for AI agents and how does DPoP address it?",
          "Why should AI agent functions be separated into distinct application registrations rather than one super-agent?",
          "What governance requirements around consent and transparency should AI agent deployments meet?",
          "Design a permission model for an AI assistant that can: read calendar, read email, draft replies (but not send), and create calendar events upon explicit user confirmation."
        ]
      },
      {
        "day": 3,
        "title": "MCP Server Security — IAM for AI Tool Access",
        "concepts": [
          {
            "heading": "MCP Server as a Resource Server",
            "body": "From an IAM architecture perspective, an MCP (Model Context Protocol) server is a resource server that exposes tools and data to AI agents. Access to MCP servers should be treated with the same rigour as access to any other sensitive resource:\n• Authentication: Which agents/models are allowed to call this MCP server? How do they authenticate?\n• Authorisation: Which tools within the MCP server can a specific agent access? Can all callers use all tools?\n• Audit: What tool calls were made? What parameters were passed? What data was returned?\n• Rate limiting: Prevent agents from making excessive API calls (intentional or due to runaway loops)"
          },
          {
            "heading": "MCP Authentication Patterns",
            "body": "Current MCP implementations support several authentication approaches:\n• API Keys: Simple but static — the MCP server validates an API key presented by the agent. Risk: key theft grants unlimited access.\n• OAuth 2.0: The MCP server is an OAuth resource server. The agent presents a Bearer token. Can scope access to specific tools.\n• mTLS (Mutual TLS): Both client (agent) and server present certificates. Very strong but operationally complex.\n• OIDC Identity Tokens: Agent presents its OIDC identity token; MCP server validates it and applies tool-level authorisation based on the agent's identity claims."
          },
          {
            "heading": "Tool-Level Access Control",
            "body": "Not all MCP tools are equally sensitive. A read_file tool is less sensitive than delete_file. A query_database is less sensitive than execute_sql. IAM thinking applied to MCP tools:\n• Categorise tools by sensitivity (read vs write, reversible vs irreversible)\n• Scope agent access to only the tools required for their specific function\n• Require elevated authorisation (or human approval) for high-risk tools (tools that delete data, send external communications, execute code)\n• Log all tool calls with agent identity, tool name, parameters, and outcome"
          },
          {
            "heading": "Human-in-the-Loop as a Control",
            "body": "For high-risk actions, the most robust control is requiring human approval before execution. This is implemented as:\n• Tool-level approvals: Before an agent calls a 'send_email' or 'delete_record' tool, a human must confirm in a UI\n• Audit-before-action: The agent creates a proposed action log; a human reviews and approves the batch\n• Breakpoint policies: Define which categories of actions always require human review, regardless of agent confidence\nThis is not just good security — it is the responsible deployment of AI. Claude's own guidelines for agentic contexts explicitly recommend this pattern for irreversible or high-impact actions."
          }
        ],
        "lab": {
          "title": "Build an IAM-Aware MCP Server Pattern",
          "steps": [
            "This lab designs a secure MCP server implementation pattern — documentation and architecture focused",
            "Read the full MCP specification: modelcontextprotocol.io",
            "Design a secure MCP server for 'BHCNATION Church Admin' that exposes these tools:",
            "  - list_members(): Read member records",
            "  - get_member_profile(member_id): Read specific member details",
            "  - update_member_contact(member_id, contact): Update contact information",
            "  - send_announcement(message, recipients): Send announcement to members",
            "  - delete_member(member_id): Remove a member record",
            "For each tool, define:",
            "  - Sensitivity level (Low/Medium/High/Critical)",
            "  - Authentication requirement (API key / OAuth token / specific role claim)",
            "  - Authorisation policy (which agent roles can call this tool)",
            "  - Human approval required? (Y/N and under what conditions)",
            "  - Audit log fields that must be captured",
            "Design the authentication flow: How does a Claude agent authenticate to this MCP server?",
            "  - What token does it present?",
            "  - How does the server validate it?",
            "  - What claims in the token determine tool-level access?",
            "Document this as an MCP Server Security Architecture document in your portfolio",
            "BONUS: If you have Node.js installed, explore the MCP SDK: npm install @modelcontextprotocol/sdk — review the sample server code"
          ]
        },
        "resources": [
          {
            "label": "Model Context Protocol Specification",
            "url": "https://modelcontextprotocol.io"
          },
          {
            "label": "MCP SDK (Node.js/Python)",
            "url": "https://github.com/modelcontextprotocol/sdk"
          },
          {
            "label": "Anthropic: Building with MCP",
            "url": "https://docs.anthropic.com/en/docs/build-with-claude/mcp"
          }
        ],
        "quiz": [
          "How is an MCP server analogous to an OAuth resource server?",
          "Why should different MCP tools have different authorisation requirements?",
          "What is the 'human-in-the-loop' control and when is it mandatory for AI agent actions?",
          "Design an audit log schema for an MCP tool call. What fields must be captured?",
          "How would you implement rate limiting as an IAM control on an MCP server?"
        ]
      },
      {
        "day": 4,
        "title": "AI Identity Governance — Lifecycle Management for Agents",
        "concepts": [
          {
            "heading": "Agent Identity Lifecycle",
            "body": "AI agent identities need lifecycle management just like human identities — but with key differences:\n• BIRTH: Agent identity is provisioned when a new agent type is deployed. Includes: unique identity in directory, scoped credentials, documented owner, permitted tools and data sources.\n• ACTIVE: Agent operates with its granted permissions. Access is continuously monitored. Permissions should be reviewed periodically (are they still appropriate?).\n• DORMANT: Agent has not been used in 30+ days. Flag for review. Should access be suspended?\n• RETIREMENT: Agent is decommissioned. Immediately revoke all credentials and access. Archive audit logs. Remove from all resource ACLs."
          },
          {
            "heading": "Agent Access Reviews",
            "body": "Traditional access reviews ask: 'Does this human still need this access?' Agent access reviews ask:\n• Is this agent still in active use?\n• Are the permissions this agent has still aligned with its function?\n• Has the agent exhibited any anomalous access patterns?\n• Is the human owner of this agent still responsible for it?\n• Has the underlying AI model been updated — do its capabilities require different permissions?\nThese reviews should be more frequent than human access reviews because agent capabilities can change with model updates."
          },
          {
            "heading": "Agent Behaviour Analytics",
            "body": "Just as User and Entity Behaviour Analytics (UEBA) monitors human users for anomalous behaviour, agent behaviour analytics should monitor AI agents:\n• Baseline: Establish normal access patterns for each agent type (which tools, how often, at what times, accessing which data)\n• Anomaly detection: Alert when an agent accesses resources outside its normal pattern, calls tools at unusual volumes, or accesses data in new categories\n• Velocity monitoring: Agents can call APIs far faster than humans — establish expected call rates and alert on deviations\n• Cross-agent correlation: If multiple agents all exhibit unusual behaviour simultaneously, investigate the orchestrating system"
          },
          {
            "heading": "Governing AI in Your Own Apps",
            "body": "As a developer building the church admin and estate management apps, you are the architect of the AI governance layer. Practical implementation:\n• Each AI feature in your app gets a distinct service principal with scoped permissions\n• User-facing AI features use delegated permissions — the AI acts on behalf of the specific user\n• Background AI features (scheduled reports, etc.) use application permissions with narrow scope\n• All AI-initiated actions are logged with: the user context, the AI feature name, the specific action, and the outcome\n• Users can see and revoke AI access in their account settings"
          }
        ],
        "lab": {
          "title": "Design Agent Governance Framework for Your Apps",
          "steps": [
            "This lab produces a portfolio document of genuine professional value",
            "For your Church Admin application (BHCNATION), design the AI Agent Governance Framework:",
            "SECTION 1: Agent Inventory",
            "  List all planned AI features: 'Sermon Summary Agent', 'Member Communication Agent', 'Attendance Analysis Agent', etc.",
            "  For each: Function | Data Accessed | Actions Taken | Owner | Sensitivity",
            "SECTION 2: Identity Model",
            "  For each agent type: Unique App Registration name, required OAuth scopes, credential type (secret vs certificate), rotation schedule",
            "SECTION 3: Permission Matrix",
            "  Table: Agent × Resource × Permission Level (Read/Write/Execute/None)",
            "SECTION 4: Lifecycle Policy",
            "  Provisioning: What triggers creation of a new agent identity?",
            "  Review: How often are agent permissions reviewed? Who reviews them?",
            "  Decommission: What triggers decommission? What happens to audit logs?",
            "SECTION 5: Monitoring and Response",
            "  What baseline metrics do you monitor? What anomaly thresholds trigger an alert?",
            "  Incident response: What are the steps if an agent behaves unexpectedly?",
            "SECTION 6: User Transparency",
            "  Where in the UI can users see what AI features have access to their data?",
            "  How can users revoke AI access without losing core app functionality?",
            "This document is your proof of IAM × AI competence — no other candidate will have this."
          ]
        },
        "resources": [
          {
            "label": "EU AI Act Summary (governance requirements for AI systems)",
            "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
          },
          {
            "label": "OWASP LLM Top 10 (AI security risks)",
            "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
          },
          {
            "label": "NIST AI RMF Playbook",
            "url": "https://airc.nist.gov/Docs/2"
          }
        ],
        "quiz": [
          "What are the four lifecycle stages of an AI agent identity?",
          "How is an AI agent access review different from a human user access review?",
          "What is UEBA and how should it be adapted for AI agent monitoring?",
          "Under GDPR, what transparency obligations exist when AI agents process user data?",
          "Why should delegated permissions be used for user-facing AI features and application permissions for background AI tasks?"
        ]
      },
      {
        "day": 5,
        "title": "LinkedIn Strategy & Personal Brand in IAM + AI",
        "concepts": [
          {
            "heading": "Why LinkedIn is Critical for IAM Roles",
            "body": "IAM is a specialised field with a relatively small, highly connected community. Recruiters for IAM roles (especially cloud IAM, identity architect, IGA specialist) actively search LinkedIn — not just job boards. Many senior IAM positions are filled through network connections before they're ever posted publicly. Your LinkedIn profile is your professional identity in the identity field — it should demonstrate exactly the intersection of skills you're building."
          },
          {
            "heading": "The Unique Value Proposition",
            "body": "Most IAM candidates have either:\n• Deep IAM skills but no AI/agentic context\n• AI skills but no IAM/security foundation\nYou are building both. This is genuinely rare in 2026. Your positioning: 'IAM professional with applied experience in governing AI agent access, non-human identity, and building secure-by-design applications.' This positions you for the emerging roles that don't even have formal titles yet — but are being hired under: Cloud Security Engineer, Identity Architect, AI Security Specialist, NHI Security Engineer."
          },
          {
            "heading": "Content Strategy for Building Authority",
            "body": "Don't just list certifications — demonstrate thinking. LinkedIn content that works for IAM professionals:\n• Short posts: 'I just completed [lab]. Here's what I learned about [specific concept]. Thread →'\n• Case studies: 'Why I separated my AI agent into two OAuth registrations rather than one'\n• Explainers: 'The difference between SAML, OAuth, and OIDC in one diagram'\n• Controversy: 'Unpopular IAM take: SMS MFA is not MFA. Here's why.'\n• Behind-the-scenes: 'Building identity governance for a church app — here's what surprised me'\nPost consistently (2-3x per week) rather than intensely then disappearing."
          },
          {
            "heading": "Building Your Network Strategically",
            "body": "Connect with:\n• IAM vendors: Employees at CyberArk, SailPoint, Okta, Microsoft Entra team — follow their content\n• Security community: ISACA, Cloud Security Alliance, Microsoft MVP community members\n• Recruiters: Identify 5-10 specialist tech recruiters in your geography who place security/IAM roles\n• Peers: Others learning IAM — connections grow mutual visibility\n• Hiring managers: Follow people with 'IAM Manager', 'Identity Architect', 'CISO' in their titles\n\nEngagement beats connection count: commenting thoughtfully on others' posts drives more visibility than passive connections."
          }
        ],
        "lab": {
          "title": "Build Your Professional IAM Identity Online",
          "steps": [
            "Complete your LinkedIn profile — every section should be filled:",
            "  Headline: 'IAM & Cloud Security Engineer | Azure Entra ID | AWS IAM | AI Identity Governance' (or adapt to your current level)",
            "  About section: 3-4 sentences max. State your focus area, what you're building, and what you uniquely bring. Mention the AI/IAM intersection.",
            "  Featured section: Add your GitHub portfolio link prominently",
            "Add all certifications when you earn them: SC-300 will appear automatically in Certifications if from Microsoft",
            "Under Experience: Add 'Independent IAM Research & Development' with BHCNATION as context — list the technologies you've been working with",
            "Write your first LinkedIn post — about something you genuinely found interesting in this course. Keep it under 300 words. End with a question to drive engagement.",
            "Follow these LinkedIn pages: Microsoft Security | CyberArk | SailPoint | Okta | AWS Security | ISACA",
            "Create your GitHub portfolio if not done: Create a repo 'iam-mastery-journey'",
            "  README.md should be impressive: Course overview, technologies used, what you built",
            "  Organize your lab notes, policy designs, and architecture documents as sub-folders",
            "  Add your SoD design document, Agent Governance Framework, and architecture diagrams",
            "Write one short blog post (can be on LinkedIn or Medium) explaining one concept you've mastered in a way that would help a beginner. Publish it.",
            "Set a LinkedIn notification to alert you to posts from: 'Identity and Access Management', 'Cloud IAM', 'Zero Trust' keywords"
          ]
        },
        "resources": [
          {
            "label": "LinkedIn Help: Optimising your profile",
            "url": "https://linkedin.com/help"
          },
          {
            "label": "GitHub: Writing a great README",
            "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
          }
        ],
        "quiz": [
          "What makes your personal IAM value proposition unique compared to most candidates in the market?",
          "What types of LinkedIn content perform well in the security/IAM community?",
          "Why is engagement on others' posts more valuable than just having many connections?",
          "Design your LinkedIn About section in 3-4 sentences.",
          "What five people, communities, or companies should you follow on LinkedIn immediately?"
        ]
      }
    ]
  },
  {
    "week": 7,
    "title": "Advanced Topics, Capstone & Job Readiness",
    "theme": "Integrate everything into a portfolio-defining capstone project and prepare for interviews.",
    "days": [
      {
        "day": 1,
        "title": "Capstone Architecture Design",
        "concepts": [
          {
            "heading": "Capstone Project Overview",
            "body": "The capstone integrates everything you've built: Active Directory on-premise + Azure AD hybrid identity + AWS federated access + SAML/OAuth/OIDC protocols + governance + PAM + non-human identity. You will build a complete, documented identity infrastructure for a simulated organisation called 'BHCNATION Enterprises' — a church community with a technology arm, staff, volunteers, and external partners."
          },
          {
            "heading": "The Organisation You're Building For",
            "body": "BHCNATION Enterprises has:\n• 50 staff members in 5 departments: Leadership, Administration, Technology, Finance, Operations\n• 200 volunteers with limited, time-bound access to specific systems\n• 3 external technology partners (vendors) with B2B access to limited shared resources\n• On-premise Windows Server infrastructure for legacy systems\n• Microsoft 365 for productivity (Teams, SharePoint, Exchange)\n• AWS for the technology team's applications\n• A custom Church Management Application (your app — BHCNATION church admin)\n• An Estate Management Application (your other app)\n• A deployed AI assistant for drafting communications"
          },
          {
            "heading": "What the Capstone Must Cover",
            "body": "Your capstone deliverable is a complete Identity Infrastructure Design + implementation documentation:\n1. AD DS design: OU structure, group strategy (AGDLP), GPO policies\n2. Hybrid identity: AD Connect configuration and sync scope\n3. Entra ID design: Conditional Access policies, MFA configuration, PIM for admins\n4. Azure AD B2B: External partner access model\n5. AWS federation: Identity Center with Entra ID as IdP, permission sets per team\n6. Application SSO: SAML/OIDC for the church app and estate app\n7. IGA: Access packages, access review schedule, SoD policy\n8. PAM: Privileged access model using PIM + HashiCorp Vault for application secrets\n9. NHI/Agent Identity: Governance framework for the AI communication assistant\n10. Monitoring: Audit log strategy, key alerts, incident response playbook"
          }
        ],
        "lab": {
          "title": "Capstone Phase 1 — Architecture Document",
          "steps": [
            "Create the master architecture document in your portfolio (Notion, Obsidian, or GitHub)",
            "Section 1: Executive Summary (2 paragraphs) — what identity architecture you're delivering and why",
            "Section 2: Organisational Analysis — departments, user types, access patterns",
            "Section 3: Identity Infrastructure Map — draw a diagram showing: AD DS, Azure AD Connect, Entra ID, AWS Identity Center, Applications. Show the federation trust arrows.",
            "Section 4: AD Design — OU structure diagram, group naming convention, AGDLP mapping",
            "Section 5: Conditional Access Policy Register — table with all CA policies, their conditions, controls, and rationale",
            "Section 6: PIM Configuration — which roles are eligible, who holds them, activation requirements",
            "Section 7: AWS Access Design — permission sets, account structure, team mappings",
            "Section 8: Application Integration Inventory — each app, protocol used (SAML/OIDC), attribute mapping",
            "Section 9: IGA Design — access packages, review schedule, SoD conflicts",
            "Section 10: NHI and Agent Identity Framework — from Week 6 Day 4 work",
            "Section 11: Monitoring and Response — alerts, runbook",
            "This document is 15-25 pages. It is your most powerful portfolio item."
          ]
        },
        "resources": [
          {
            "label": "Microsoft Reference Architecture for Identity",
            "url": "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/identity/"
          },
          {
            "label": "AWS Security Reference Architecture",
            "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/"
          }
        ],
        "quiz": [
          "What are the 10 components your capstone must cover?",
          "How do you handle volunteer access that must automatically expire after their term ends?",
          "Design the SoD policy for the Finance team (who should not be able to both create and approve payments).",
          "What federation protocol should the custom BHCNATION church app use for SSO? Why?",
          "How would you grant external partner access to specific SharePoint sites without creating full AD/Entra accounts?"
        ]
      },
      {
        "day": 2,
        "title": "Capstone Implementation — Core Identity Infrastructure",
        "concepts": [
          {
            "heading": "Implementation Phase Overview",
            "body": "Over the next two days, you implement the key components of your capstone in your actual lab environment. Not everything can be fully implemented (some components are enterprise-scale) — but you must demonstrate the critical elements and document the remainder thoroughly. What you CAN fully implement: AD structure, Entra ID policies, AWS federation, app SSO integrations, PIM, access reviews. What you document rather than fully implement: full SCIM automation, enterprise PAM, production-scale IGA."
          }
        ],
        "lab": {
          "title": "Capstone Phase 2 — Implementation",
          "steps": [
            "AD Implementation:",
            "  Create the full OU structure in your iamlab.local domain reflecting BHCNATION Enterprises",
            "  Create representative users for each department (minimum 2 per department, 10 users total)",
            "  Implement AGDLP group structure for all departments",
            "  Deploy Security Baseline GPO + Department-specific policies",
            "Entra ID Implementation:",
            "  Verify hybrid sync is working (Week 2 lab)",
            "  Implement the full Conditional Access policy set (CA policies from Week 4)",
            "  Configure PIM for all privileged roles with appropriate settings",
            "  Create Access Packages for staff onboarding, volunteer access (90-day expiry), and partner access",
            "  Set up Access Reviews for privileged roles (quarterly schedule)",
            "AWS Implementation:",
            "  Verify Azure AD → AWS Identity Center federation (Week 4 lab)",
            "  Create Permission Sets: Leadership-ReadOnly, Technology-Developer, Finance-BillingAccess, Operations-EC2",
            "  Assign Entra ID groups to appropriate Permission Sets",
            "  Configure CloudTrail trail and CloudWatch alerts",
            "Application SSO:",
            "  Configure SAML SSO for at least one enterprise app (use SAMLtest.id as a stand-in for your church app)",
            "  Configure the GitHub Actions OIDC integration (Week 3 lab) as representative of CI/CD",
            "  Configure OAuth scoped app registrations for the AI communication assistant (Week 6 lab)",
            "HashiCorp Vault:",
            "  Set up Vault with secrets for the church app (database credentials)",
            "  Create policies for each application component",
            "  Document the secret injection pattern for your app",
            "SCREENSHOT EVERYTHING. These screenshots are your evidence."
          ]
        },
        "resources": [],
        "quiz": []
      },
      {
        "day": 3,
        "title": "Capstone Finalisation — Portfolio and Documentation",
        "concepts": [
          {
            "heading": "Making Your Work Visible",
            "body": "Implementation without documentation is invisible. Your capstone must be packaged in a way that a hiring manager with 5 minutes can understand what you built, why you made the choices you made, and that you can explain it in an interview. The three artefacts of a complete capstone: a written architecture document, a visual diagram, and a recorded walkthrough."
          }
        ],
        "lab": {
          "title": "Capstone Phase 3 — Finalise, Record, Publish",
          "steps": [
            "Architecture Diagram: Use draw.io (free at app.diagrams.net) to create a professional system diagram",
            "  Show: AD DS on-prem → Azure AD Connect → Entra ID → AWS Identity Center → AWS Accounts",
            "  Show federation protocols (SAML arrows, OIDC arrows)",
            "  Show applications integrated for SSO",
            "  Show MCP/AI agent identity layer",
            "  Export as PNG/SVG",
            "Written Document: Complete all 11 sections from Day 1. Add the architecture diagram. Add screenshots from your implementation.",
            "  Export as PDF from Notion/Obsidian or save as Markdown in GitHub",
            "GitHub Repository: Final structure should include:",
            "  README.md: Project title, overview, technologies used, key decisions and why, screenshots",
            "  /architecture: Diagrams and architecture document",
            "  /ad-design: AD structure documentation, GPO configurations, AGDLP tables",
            "  /entra-id: Conditional Access policy register, PIM configuration",
            "  /aws: IAM policies JSON, permission set definitions, federation config notes",
            "  /application-sso: SAML configuration notes, OIDC setup, attribute mappings",
            "  /iga: Access package designs, SoD policy, review schedule",
            "  /ai-governance: NHI framework, agent identity model",
            "  /monitoring: Alert definitions, incident response runbook",
            "  /interview-prep: Q&A documents from each module's quiz sections",
            "Video Walkthrough: Record a 5-7 minute screen recording (use Loom — free)",
            "  Walk through your architecture diagram, explain the key design decisions, show 3-4 live demos",
            "  Upload to Loom and add the link to your GitHub README and LinkedIn profile",
            "LinkedIn Post: Write a post announcing your capstone project. Tag the technologies: #MicrosoftEntraID #AWSIAM #ZeroTrust #IAM #IdentityGovernance #AISecurity",
            "This post is your professional coming-out. Write it with care and confidence."
          ]
        },
        "resources": [
          {
            "label": "draw.io (free diagramming)",
            "url": "https://app.diagrams.net"
          },
          {
            "label": "Loom (free screen recording)",
            "url": "https://www.loom.com"
          }
        ],
        "quiz": []
      },
      {
        "day": 4,
        "title": "Interview Preparation — IAM Technical Questions",
        "concepts": [
          {
            "heading": "The IAM Interview Landscape",
            "body": "IAM interviews typically have three components:\n1. Technical screen: Concepts, definitions, protocol knowledge\n2. Scenario/problem-solving: 'How would you design...', 'How would you troubleshoot...'\n3. Experience review: Walk me through a project you've done\nFor junior-to-mid roles, interviewers primarily test conceptual understanding and ability to apply it. For senior roles, they assess architecture thinking, trade-off analysis, and experience with failure modes."
          }
        ],
        "lab": {
          "title": "Master the Core IAM Interview Questions",
          "steps": [
            "Write out full answers to ALL of the following. Do not read from notes — write from memory first, then check.",
            "--- CONCEPTUAL ---",
            "1. Explain IAM to a non-technical manager in 60 seconds.",
            "2. What is the difference between authentication and authorisation?",
            "3. Explain Zero Trust in 3 principles.",
            "4. What is least privilege and how do you implement it in practice?",
            "5. What is PIM and how does it implement Just-In-Time access?",
            "--- PROTOCOL QUESTIONS ---",
            "6. Walk me through a SAML SP-initiated login flow step by step.",
            "7. What is OAuth 2.0 and how does it differ from OIDC?",
            "8. What is the Authorization Code flow with PKCE? Why is PKCE important?",
            "9. What is a JWT? What claims should you validate?",
            "10. You need to give a CI/CD pipeline access to AWS without stored credentials. How do you do it?",
            "--- AZURE/ENTRA ---",
            "11. What are the components of a Conditional Access policy?",
            "12. How does Azure AD Connect work and what are the three sync methods?",
            "13. A user is blocked by Conditional Access while travelling. Walk through your troubleshooting.",
            "14. Explain Entra ID Entitlement Management.",
            "--- AWS ---",
            "15. What is the evaluation order for IAM policies in AWS?",
            "16. What is a Permission Boundary and when do you use it?",
            "17. How does IAM Identity Center work with an external IdP?",
            "18. What is the difference between an IAM User and an IAM Role?",
            "--- SCENARIO ---",
            "19. An employee is terminated today. Walk through the complete offboarding IAM process.",
            "20. How would you design IAM for AI agents in a production environment?"
          ]
        },
        "resources": [
          {
            "label": "ISACA: IAM Interview Question Bank",
            "url": "https://www.isaca.org/resources/job-practice-areas"
          }
        ],
        "quiz": []
      },
      {
        "day": 5,
        "title": "Job Search Strategy, Certifications & Continuous Learning",
        "concepts": [
          {
            "heading": "Your 90-Day Post-Course Action Plan",
            "body": "Completing this course is the beginning, not the end. The field evolves quickly — AI identity governance especially. Your 90-day plan after completing Week 12:\n• Month 1: Take the SC-300 exam. Continue adding to your GitHub portfolio. Post on LinkedIn weekly.\n• Month 2: Pursue your first application (junior IAM roles, cloud security analyst). Engage with IAM communities (ISACA local chapter, Microsoft Learn community).\n• Month 3: Consider AZ-500 (Azure Security Engineer) or AWS Certified Security - Specialty as your next cert. Start contributing to open-source IAM projects if possible."
          },
          {
            "heading": "Certification Roadmap",
            "body": "Recommended sequence based on your path:\n1. SC-300 (Microsoft Identity and Access Administrator) — IMMEDIATE priority, covered by this course\n2. AZ-900 (Azure Fundamentals) — quick win, context for all Microsoft security certs\n3. AZ-500 (Azure Security Engineer) — deeper security coverage, builds on SC-300\n4. AWS Certified Security - Specialty — validates your AWS IAM work\n5. CISSP — 5 years experience required, but start reading the domains now\n6. ISACA CIAM (Certified Identity and Access Manager) — specifically IAM-focused, growing recognition"
          },
          {
            "heading": "Communities and Continuous Learning",
            "body": "Stay current through:\n• Microsoft Tech Community (techcommunity.microsoft.com): Entra ID blog — new features announced here\n• AWS Security Blog (aws.amazon.com/blogs/security): IAM updates and best practices\n• ISACA (isaca.org): Professional development, standards, local chapters\n• Cloud Security Alliance (cloudsecurityalliance.org): Research papers on emerging topics\n• Dark Reading, Krebs on Security: General security news with frequent IAM-relevant coverage\n• Follow on LinkedIn: Alex Weinert (Microsoft Identity), Caleb Sima (NHI security), Jeff Scrum (AWS IAM)"
          },
          {
            "heading": "Turning Developer Experience Into IAM Roles",
            "body": "Your developer background is a genuine advantage, not a detraction. The most valuable IAM professionals in 2026 are those who can:\n• Implement identity in applications (OAuth flows, OIDC integration, token handling)\n• Build internal IAM tooling (access request systems, lifecycle automation scripts)\n• Understand how applications consume identity (attribute mapping, consent, claims)\n• Architect identity for AI/ML workloads\nFrame your developer experience as 'I have built systems that consume identity infrastructure' — this makes you rare. Most IAM candidates have only administered identity systems, not built applications that use them."
          }
        ],
        "lab": {
          "title": "Final Review, Self-Assessment & Planning",
          "steps": [
            "Complete the end-of-course self-assessment: go back to your SC-300 skills spreadsheet from Week 5",
            "Update your confidence ratings for every topic — how much have they improved?",
            "Complete this overall skills matrix and add to your portfolio:",
            "  Active Directory: Confidence /10 | Key skills demonstrated",
            "  Azure Entra ID: Confidence /10",
            "  Conditional Access: Confidence /10",
            "  PIM: Confidence /10",
            "  AWS IAM: Confidence /10",
            "  AWS Identity Center: Confidence /10",
            "  SAML 2.0: Confidence /10",
            "  OAuth 2.0: Confidence /10",
            "  OIDC: Confidence /10",
            "  Identity Governance (IGA): Confidence /10",
            "  PAM (HashiCorp Vault): Confidence /10",
            "  Zero Trust Architecture: Confidence /10",
            "  Non-Human Identity: Confidence /10",
            "  AI Agent IAM: Confidence /10",
            "Areas below 7/10: schedule specific additional study before your exam",
            "Book your SC-300 exam: pearsonvue.com/microsoft — aim for 4-6 weeks from today",
            "Final action: Update your LinkedIn headline and About section to reflect your new skills",
            "Send a connection request with a personalised note to 5 IAM professionals on LinkedIn",
            "You have built a foundation that most IAM professionals take 2-3 years to reach. Now use it."
          ]
        },
        "resources": [
          {
            "label": "Pearson VUE — Book Microsoft Exams",
            "url": "https://home.pearsonvue.com/microsoft"
          },
          {
            "label": "ISACA: Certification Pathways",
            "url": "https://www.isaca.org/credentialing"
          },
          {
            "label": "Cloud Security Alliance Research",
            "url": "https://cloudsecurityalliance.org/research/"
          }
        ],
        "quiz": [
          "What are your top 3 weak areas from the self-assessment?",
          "Write out your 90-day post-course plan in specific, actionable milestones.",
          "How will you frame your developer background as an advantage for IAM roles?",
          "Which certification are you pursuing first and when have you scheduled it?",
          "What is one area of IAM that this course has most surprised or challenged you, and how has your thinking changed?"
        ]
      }
    ]
  },
  {
    "week": 8,
    "title": "GCP IAM & Multi-Cloud Strategy",
    "theme": "Master Google Cloud IAM and develop strategies for managing identity across multi-cloud environments.",
    "days": [
      {
        "day": 1,
        "title": "GCP IAM Fundamentals — Projects, Roles & Policies",
        "concepts": [
          {
            "heading": "GCP IAM Architecture",
            "body": "Google Cloud IAM uses a resource hierarchy for access control: Organisation → Folders → Projects → Resources. IAM policies are attached at any level and INHERIT downward. A permission granted at the Organisation level applies to every project and resource beneath it. This is fundamentally different from AWS (where permissions are identity-centric) and Azure (which uses both). GCP uses a 'deny by default' model — all access must be explicitly granted."
          },
          {
            "heading": "GCP Principals",
            "body": "GCP identifies principals in several ways:\n• Google Accounts: Individual users (user@gmail.com)\n• Service Accounts: Machine/application identities (name@project-id.iam.gserviceaccount.com)\n• Google Groups: Collections of accounts for bulk access management\n• Google Workspace Domains: All users in a Workspace domain\n• Cloud Identity Domains: Managed identity for organizations without Workspace\n• allAuthenticatedUsers: Any Google-authenticated entity (avoid in production)\n• allUsers: Anyone, including unauthenticated (public access — use with extreme caution)"
          },
          {
            "heading": "Roles in GCP",
            "body": "GCP has three types of roles:\n• Basic Roles: Owner, Editor, Viewer — very broad, avoid in production (legacy from early GCP)\n• Predefined Roles: Curated by Google for specific services (e.g., roles/storage.objectViewer, roles/compute.instanceAdmin). These follow least privilege per service.\n• Custom Roles: You define exactly which permissions to include. Used when predefined roles are too broad or too narrow.\nBest practice: Start with predefined roles, create custom roles only when needed. Never use basic roles in production — they grant far too many permissions."
          },
          {
            "heading": "IAM Policy Binding",
            "body": "GCP IAM policies are expressed as bindings: a role is bound to one or more principals on a specific resource.\n\nExample:\n{\n  'bindings': [\n    {\n      'role': 'roles/storage.objectViewer',\n      'members': ['user:analyst@example.com', 'group:data-team@example.com'],\n      'condition': {\n        'title': 'expires_2025',\n        'expression': 'request.time < timestamp(\"2025-12-31T00:00:00Z\")'\n      }\n    }\n  ]\n}\n\nConditions enable ABAC-style policies — time-based, resource-based, IP-based access."
          }
        ],
        "lab": {
          "title": "Set Up GCP Project & Configure IAM",
          "steps": [
            "Create a Google Cloud account: cloud.google.com — new accounts get $300 free tier credit",
            "Create a new Project: Console → Project Selector → New Project → Name: 'iam-mastery-lab'",
            "Navigate to IAM & Admin → IAM — review the default roles assigned to your account",
            "Create a Service Account: IAM & Admin → Service Accounts → Create → Name: 'app-reader' → Grant role: Storage Object Viewer",
            "Create a custom role: IAM & Admin → Roles → Create Role → Title: 'Limited Compute Viewer'",
            "  Add permissions: compute.instances.list, compute.instances.get, compute.zones.list",
            "Create a Cloud Storage bucket: Cloud Storage → Create Bucket → Name: 'iam-lab-[yourname]' → Upload a test file",
            "Grant your service account access to the bucket: Bucket → Permissions → Grant Access → paste service account email → Role: Storage Object Viewer",
            "Install gcloud CLI: cloud.google.com/sdk/docs/install — run 'gcloud init' to authenticate",
            "Test: gcloud projects get-iam-policy iam-mastery-lab — review the full IAM policy output",
            "Document: Compare GCP's policy structure (resource-centric bindings) to AWS's structure (identity-centric policies)"
          ]
        },
        "resources": [
          {
            "label": "GCP IAM Documentation",
            "url": "https://cloud.google.com/iam/docs"
          },
          {
            "label": "GCP IAM Roles Reference",
            "url": "https://cloud.google.com/iam/docs/understanding-roles"
          },
          {
            "label": "GCP IAM Best Practices",
            "url": "https://cloud.google.com/iam/docs/using-iam-securely"
          }
        ],
        "quiz": [
          "How does GCP's resource hierarchy affect IAM policy inheritance?",
          "What are the three types of roles in GCP IAM? When should you use each?",
          "Why should you never use basic roles (Owner/Editor/Viewer) in production?",
          "How does GCP IAM's resource-centric binding model differ from AWS's identity-centric policy model?",
          "What is a GCP Service Account and how does it differ from an AWS IAM Role?"
        ]
      },
      {
        "day": 2,
        "title": "GCP Service Accounts & Workload Identity",
        "concepts": [
          {
            "heading": "Service Account Deep Dive",
            "body": "In GCP, Service Accounts serve double duty — they are both an identity (can be granted access to resources) AND a resource (access to use the service account can be granted to others). This dual nature is unique to GCP.\n\nKey service account types:\n• Default Service Accounts: Auto-created for Compute Engine, App Engine, etc. Have broad Editor permissions by default — DANGEROUS. Always replace with custom service accounts.\n• User-Managed Service Accounts: You create and manage. Best practice.\n• Google-Managed Service Accounts: Used by GCP services internally. Don't modify.\n\nService Account Keys: JSON files containing private keys. These are LONG-TERM CREDENTIALS — the GCP equivalent of AWS access keys. Avoid whenever possible. Use Workload Identity instead."
          },
          {
            "heading": "Workload Identity Federation",
            "body": "GCP Workload Identity Federation allows external workloads (AWS, Azure, GitHub Actions, Kubernetes) to impersonate GCP service accounts WITHOUT service account keys. The external workload presents its native credential (AWS role session token, Azure AD token, GitHub OIDC token), GCP validates it against a configured Workload Identity Pool, and issues short-lived GCP credentials.\n\nThis eliminates the #1 GCP IAM security risk: leaked service account key files. Every CI/CD pipeline and cross-cloud integration should use Workload Identity Federation instead of downloaded keys."
          },
          {
            "heading": "VPC Service Controls",
            "body": "VPC Service Controls create security perimeters around GCP resources that restrict data movement. Even if a user has IAM permissions, VPC Service Controls can block data exfiltration outside the perimeter. This is a defense-in-depth layer on top of IAM — addressing the scenario where IAM permissions are correctly set but an attacker with valid credentials tries to copy data to an external project."
          },
          {
            "heading": "Organisation Policy Constraints",
            "body": "Organisation Policies in GCP are analogous to AWS SCPs. They set guardrails across the organisation:\n• Restrict which regions resources can be created in\n• Prevent public access to Cloud Storage buckets\n• Require OS Login for VM SSH access\n• Disable service account key creation (force Workload Identity)\n• Restrict sharing of resources outside the organisation\nThese policies override individual IAM permissions — even an Owner cannot violate organisation policy constraints."
          }
        ],
        "lab": {
          "title": "Workload Identity Federation — GitHub to GCP",
          "steps": [
            "In GCP Console: IAM & Admin → Workload Identity Federation → Create Pool",
            "  Pool name: 'github-pool' | Provider: OIDC | Issuer: https://token.actions.githubusercontent.com",
            "  Attribute mapping: google.subject = assertion.sub, attribute.repository = assertion.repository",
            "Create a Service Account for GitHub: 'github-deployer@iam-mastery-lab.iam.gserviceaccount.com'",
            "Grant minimal permissions: Storage Object Creator on your bucket",
            "Bind the Workload Identity Pool to the Service Account with a condition: attribute.repository = '[your-user]/[your-repo]'",
            "In your GitHub repository, create .github/workflows/gcp-test.yml:",
            "  permissions: id-token: write, contents: read",
            "  steps: use google-github-actions/auth@v2 with workload_identity_provider and service_account",
            "  Then run: gcloud storage ls gs://iam-lab-[yourname]/",
            "Push and verify: no service account keys stored anywhere — pure OIDC federation",
            "Document: Compare this to the AWS OIDC setup from Week 3. Note similarities in the trust model."
          ]
        },
        "resources": [
          {
            "label": "GCP Workload Identity Federation",
            "url": "https://cloud.google.com/iam/docs/workload-identity-federation"
          },
          {
            "label": "GitHub: OIDC with GCP",
            "url": "https://github.com/google-github-actions/auth"
          },
          {
            "label": "GCP Organisation Policy Constraints",
            "url": "https://cloud.google.com/resource-manager/docs/organization-policy/overview"
          }
        ],
        "quiz": [
          "Why are service account keys considered a major security risk in GCP?",
          "How does Workload Identity Federation eliminate the need for service account keys?",
          "What are VPC Service Controls and what threat do they address that IAM alone does not?",
          "How are GCP Organisation Policies similar to AWS SCPs?",
          "Design a CI/CD pipeline that deploys to both AWS and GCP without any stored credentials."
        ]
      },
      {
        "day": 3,
        "title": "Multi-Cloud IAM Strategy",
        "concepts": [
          {
            "heading": "The Multi-Cloud Reality",
            "body": "Most enterprises (70%+) use two or more cloud providers. This is not a choice — it's often driven by acquisitions, best-of-breed service selection, or regulatory requirements for geographic diversity. The IAM challenge: managing identities, permissions, and governance consistently across platforms with fundamentally different IAM models.\n\nThe three cloud IAM models:\n• AWS: Identity-centric (policies attached to users/roles)\n• Azure: Hybrid (RBAC + Conditional Access + resource scope)\n• GCP: Resource-centric (bindings at resource hierarchy levels)\n\nEach has different terminology, different APIs, different audit log formats, and different governance tools."
          },
          {
            "heading": "Unified Identity Source of Truth",
            "body": "The foundational strategy for multi-cloud IAM: ONE authoritative identity source that federates to all clouds.\n\nCommon patterns:\n• Azure AD (Entra ID) as central IdP → federates to AWS IAM Identity Center + GCP Cloud Identity\n• Okta/OneLogin as central IdP → federates to all three clouds\n• On-prem AD → Azure AD Connect → Entra ID → AWS + GCP federation\n\nBenefits: Single JML process, single MFA enforcement point, single place to disable all access, unified access reviews, consistent naming conventions.\n\nThe golden rule: NEVER create native cloud IAM users in spoke accounts when you can federate."
          },
          {
            "heading": "Cross-Cloud IAM Comparison Matrix",
            "body": "Key concept mappings:\n• AWS IAM User ≈ Azure AD User ≈ GCP Cloud Identity User\n• AWS IAM Role ≈ Azure AD App Registration ≈ GCP Service Account\n• AWS IAM Policy ≈ Azure RBAC Role Assignment ≈ GCP IAM Binding\n• AWS SCP ≈ Azure Management Group Policy ≈ GCP Organisation Policy\n• AWS Permission Boundary ≈ Azure Custom Role (limited scope) ≈ GCP Custom Role\n• AWS CloudTrail ≈ Azure Activity Log / Sign-in Logs ≈ GCP Cloud Audit Logs\n• AWS IAM Access Analyzer ≈ Azure AD Access Reviews ≈ GCP IAM Recommender\n\nMastering these mappings makes you valuable in any multi-cloud environment."
          },
          {
            "heading": "Cloud-Agnostic IAM Tools",
            "body": "Several tools span multiple clouds:\n• HashiCorp Vault: Secrets management across all clouds\n• Teleport: Unified access to SSH, Kubernetes, databases across clouds\n• CyberArk: PAM across all clouds and on-prem\n• SailPoint / Saviynt: IGA spanning cloud and on-prem\n• Wiz / Orca: CSPM with IAM misconfiguration detection across clouds\n• Ermetic (now Tenable): Cloud infrastructure entitlement management (CIEM)\n\nCIEM is the emerging tool category specifically for multi-cloud IAM — it discovers all identities, maps their effective permissions, and identifies excessive or risky access."
          }
        ],
        "lab": {
          "title": "Build a Multi-Cloud IAM Comparison Document",
          "steps": [
            "Create a comprehensive comparison document (your portfolio piece for multi-cloud knowledge)",
            "Table 1: IAM Concept Mapping — AWS vs Azure vs GCP. 15+ rows covering all key concepts.",
            "Table 2: Authentication Protocol Support — which protocols each cloud supports natively",
            "Table 3: Audit Log Comparison — log sources, retention, key fields, export options for each cloud",
            "Design Exercise: Draw an architecture diagram showing Entra ID as the central IdP federating to:",
            "  AWS IAM Identity Center (SAML) → multiple AWS accounts with Permission Sets",
            "  GCP Cloud Identity (OIDC/SAML) → multiple GCP projects with IAM bindings",
            "  On-prem AD (Azure AD Connect) → legacy applications",
            "For each federation arrow, note: the protocol used, what attributes are mapped, and what happens when a user is disabled at the IdP",
            "Document: Identify 3 scenarios where multi-cloud IAM complexity creates security gaps (e.g., orphaned permissions in one cloud when access is revoked in another)",
            "Add this to your GitHub portfolio — multi-cloud IAM knowledge is highly demanded in 2026"
          ]
        },
        "resources": [
          {
            "label": "Gartner: CIEM Market Guide",
            "url": "https://www.gartner.com/en/documents/4007596"
          },
          {
            "label": "Cloud Security Alliance: Multi-Cloud IAM",
            "url": "https://cloudsecurityalliance.org/research/"
          },
          {
            "label": "HashiCorp: Multi-Cloud Security",
            "url": "https://www.hashicorp.com/solutions/multi-cloud-security"
          }
        ],
        "quiz": [
          "What is the fundamental architectural difference between how AWS, Azure, and GCP model IAM?",
          "Why should you use a single IdP for multi-cloud rather than native IAM users in each cloud?",
          "What is CIEM and what problem does it solve?",
          "Map 5 AWS IAM concepts to their Azure and GCP equivalents.",
          "An employee leaves the organisation. Describe the ideal offboarding process across all three clouds with a federated IdP."
        ]
      },
      {
        "day": 4,
        "title": "Cloud Identity Security Posture Management",
        "concepts": [
          {
            "heading": "CSPM and CIEM",
            "body": "Cloud Security Posture Management (CSPM) tools continuously monitor cloud configurations for security risks. Cloud Infrastructure Entitlement Management (CIEM) is the IAM-specific subset — it focuses exclusively on identity and access risks across cloud environments.\n\nWhat CIEM detects:\n• Over-privileged identities (permissions granted but never used)\n• Dormant identities (accounts not active for 90+ days)\n• Publicly accessible resources (S3 buckets, GCS buckets, Azure blobs)\n• Cross-account trust relationships that may be too permissive\n• Service accounts with admin-level permissions\n• Missing MFA on privileged accounts\n• Non-compliant IAM configurations (against your defined policies)"
          },
          {
            "heading": "Right-Sizing Permissions",
            "body": "The most impactful IAM security improvement in any cloud environment: reducing excessive permissions to only what's actually used.\n\nProcess:\n1. Enable comprehensive audit logging (CloudTrail, Azure Activity Logs, GCP Audit Logs)\n2. Collect 90 days of access data\n3. Analyse: which permissions were actually used vs. which were granted?\n4. Generate right-sized policies: IAM Access Analyzer (AWS), IAM Recommender (GCP), Entra ID Access Reviews (Azure)\n5. Replace over-broad policies with minimal policies\n6. Monitor for access denied errors — indicates over-correction\n7. Continuously iterate\n\nThis is one of the highest-value activities an IAM professional can perform — it directly reduces attack surface."
          },
          {
            "heading": "Infrastructure as Code for IAM",
            "body": "Managing IAM through code (IaC) rather than GUI clicks provides:\n• Version control: Every IAM change is tracked in Git\n• Review process: Policy changes go through pull requests\n• Reproducibility: IAM configurations can be replicated across environments\n• Drift detection: Compare actual state to desired state\n\nTools:\n• Terraform: Multi-cloud IaC with IAM resource support for AWS, Azure, GCP\n• AWS CloudFormation: AWS-native IaC\n• Azure Bicep/ARM: Azure-native IaC\n• GCP Deployment Manager / Terraform: GCP IaC\n• Pulumi: IaC in general-purpose programming languages"
          },
          {
            "heading": "Cloud IAM in the Real World",
            "body": "Common real-world IAM challenges that tools alone cannot solve:\n• Shadow IT: Business units creating cloud accounts without IAM team knowledge\n• Credential sprawl: API keys, service account keys, secrets in repositories\n• Shared accounts: Teams sharing a single admin account (no individual accountability)\n• Incomplete offboarding: User disabled in corporate directory but has native cloud accounts still active\n• Exception fatigue: Too many policy exceptions granted 'temporarily' but never revoked\n\nSolving these requires process, policy, and culture — not just technology."
          }
        ],
        "lab": {
          "title": "Cloud IAM Security Assessment",
          "steps": [
            "Perform a security assessment of your AWS lab environment:",
            "  Run IAM Access Analyzer: IAM → Access Analyzer → Review all findings",
            "  Run IAM Credential Report: IAM → Credential Report → Download → Review for: users without MFA, unused access keys, old passwords",
            "  Review CloudTrail for unused permissions: filter by ErrorCode = AccessDenied (shows attempted but blocked access)",
            "Perform a security assessment of your GCP lab:",
            "  IAM & Admin → IAM Recommender → Review recommendations for over-privileged accounts",
            "  Security → Security Command Center → Review IAM-related findings",
            "Perform a security assessment of your Entra ID tenant:",
            "  Entra ID → Security → Identity Secure Score → Review recommendations",
            "  Review: which recommendations are you already implementing?",
            "Create an 'IAM Security Assessment Report' covering all three clouds. For each finding, note: Severity, Current State, Recommended Remediation, Expected Effort.",
            "This report template is directly usable in professional IAM consulting engagements."
          ]
        },
        "resources": [
          {
            "label": "AWS IAM Access Analyzer",
            "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html"
          },
          {
            "label": "GCP IAM Recommender",
            "url": "https://cloud.google.com/iam/docs/recommender-overview"
          },
          {
            "label": "Microsoft Secure Score",
            "url": "https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-secure-score"
          }
        ],
        "quiz": [
          "What is CIEM and how does it differ from general CSPM?",
          "Describe the process for right-sizing IAM permissions using audit log data.",
          "Why should IAM policies be managed as Infrastructure as Code?",
          "What are three common real-world IAM problems that technology alone cannot solve?",
          "You join a company and discover 40% of IAM users have admin-level access. What is your remediation plan?"
        ]
      },
      {
        "day": 5,
        "title": "AWS Certified Security Specialty & GCP Security Prep",
        "concepts": [
          {
            "heading": "AWS Security Specialty Overview",
            "body": "The AWS Certified Security - Specialty (SCS-C02) validates deep knowledge of AWS security services including IAM, detective controls, infrastructure protection, data protection, and incident response. IAM is approximately 20-30% of the exam. If you have completed Weeks 1-8 of this course, you have strong foundations for the IAM portion. Additional study areas unique to this exam: AWS KMS, AWS Shield, AWS WAF, AWS Config, Amazon Inspector, Amazon Macie."
          },
          {
            "heading": "Google Professional Cloud Security Engineer",
            "body": "Google's security certification covers IAM extensively — including organisation policy, VPC Service Controls, BeyondCorp (Google's Zero Trust implementation), and data protection. It requires strong understanding of GCP's resource hierarchy and how IAM policies inherit. Study focus: IAM conditions, Workload Identity Federation, Binary Authorization, and Security Command Center."
          },
          {
            "heading": "Building Your Multi-Cloud Certification Stack",
            "body": "The certification combination that makes you exceptional:\n1. CompTIA Security+ ✓ (you have this)\n2. SC-300 (Microsoft Identity Administrator) — your immediate next cert\n3. AZ-500 (Azure Security Engineer) — broader Azure security\n4. AWS Security Specialty — cloud security depth\n5. Google Cloud Security Engineer — completes the cloud trifecta\n6. CISSP (when eligible) — the capstone\n\nHaving certifications across all three clouds is extremely rare and positions you as a multi-cloud security architect."
          },
          {
            "heading": "Week 8 Integration Review",
            "body": "This week you've added GCP to your IAM toolkit. You can now:\n• Configure IAM in all three major clouds\n• Understand the architectural differences and map concepts between them\n• Implement Workload Identity Federation in AWS and GCP\n• Perform cross-cloud IAM security assessments\n• Articulate multi-cloud IAM strategy to stakeholders\n\nThis multi-cloud competence is your differentiator. Most IAM professionals know one cloud deeply. You are building fluency in all three."
          }
        ],
        "lab": {
          "title": "Multi-Cloud Certification Study Plan",
          "steps": [
            "Review the AWS Security Specialty exam guide: aws.amazon.com/certification/certified-security-specialty",
            "Map your current knowledge to the exam domains. Rate each 1-5 confidence.",
            "Review the Google Cloud Security Engineer exam guide: cloud.google.com/learn/certification/cloud-security-engineer",
            "Map your current knowledge similarly. Rate each 1-5.",
            "Create a 6-month certification roadmap: which certs, in what order, with what timeline",
            "For each planned cert: list the study resources, practice exam sources, and target exam date",
            "Update your LinkedIn profile to mention your multi-cloud IAM focus",
            "Add your multi-cloud IAM comparison document to your GitHub portfolio",
            "Write a LinkedIn post about something you learned comparing IAM across clouds"
          ]
        },
        "resources": [
          {
            "label": "AWS Security Specialty Exam Guide",
            "url": "https://aws.amazon.com/certification/certified-security-specialty/"
          },
          {
            "label": "Google Cloud Security Engineer",
            "url": "https://cloud.google.com/learn/certification/cloud-security-engineer"
          },
          {
            "label": "Certification Roadmap",
            "url": "https://pauljerimy.com/security-certification-roadmap/"
          }
        ],
        "quiz": [
          "Which AWS security services beyond IAM should you study for the Security Specialty exam?",
          "What is BeyondCorp and how does it relate to Zero Trust?",
          "Design a 6-month certification plan starting from your current position.",
          "How does having certifications across all three clouds change your market positioning?",
          "What GCP-specific IAM features have no direct equivalent in AWS or Azure?"
        ]
      }
    ]
  },
  {
    "week": 9,
    "title": "Kubernetes & Container Identity",
    "theme": "Master identity management for containerised workloads — the dominant infrastructure model of 2026.",
    "days": [
      {
        "day": 1,
        "title": "Kubernetes RBAC — Roles, Bindings & ServiceAccounts",
        "concepts": [
          {
            "heading": "Why Kubernetes Identity Matters",
            "body": "Kubernetes runs most modern applications. Each pod, service, and operator needs an identity to access cluster resources and external services. Kubernetes has its own RBAC system, separate from (but connecting to) cloud IAM. As an IAM professional, you must understand:\n• How users authenticate to the cluster\n• How pods authenticate to external services (cloud APIs, databases)\n• How to implement least privilege within the cluster\n• How to audit access in Kubernetes environments"
          },
          {
            "heading": "Kubernetes RBAC Model",
            "body": "Kubernetes RBAC has four key objects:\n• Role: Defines permissions within a namespace (e.g., 'can read pods in namespace dev')\n• ClusterRole: Defines permissions cluster-wide (e.g., 'can read nodes')\n• RoleBinding: Assigns a Role to a subject (user, group, or ServiceAccount) within a namespace\n• ClusterRoleBinding: Assigns a ClusterRole cluster-wide\n\nSubjects can be:\n• Users: Authenticated humans (via certificates, OIDC tokens, or cloud IAM)\n• Groups: Collections of users\n• ServiceAccounts: In-cluster identities for pods and controllers"
          },
          {
            "heading": "Kubernetes ServiceAccounts",
            "body": "A ServiceAccount is an identity for processes running inside pods. Every namespace has a 'default' ServiceAccount. When a pod runs, it automatically gets the default ServiceAccount's token mounted at /var/run/secrets/kubernetes.io/serviceaccount/token.\n\nBest practices:\n• Never use the default ServiceAccount for production workloads\n• Create specific ServiceAccounts per application with minimal RBAC permissions\n• Disable automounting of ServiceAccount tokens when not needed: automountServiceAccountToken: false\n• Use token audience and expiration (bound service account tokens) for short-lived credentials"
          },
          {
            "heading": "Authentication to Kubernetes",
            "body": "Users authenticate to Kubernetes through various methods:\n• X.509 Client Certificates: Generated by the cluster CA. Used by kubeadm-created admin users.\n• OIDC Tokens: Kubernetes can validate OIDC tokens from any IdP (Azure AD, Okta, etc.). This is the enterprise standard — same identity for cluster and cloud.\n• Cloud IAM Integration: EKS uses AWS IAM auth, AKS uses Azure AD, GKE uses Google Identity.\n• Webhook Token Authentication: Custom authentication via external webhook.\n\nFor enterprise: OIDC integration with your central IdP (Entra ID) provides unified identity across cluster and cloud."
          }
        ],
        "lab": {
          "title": "Kubernetes RBAC Lab",
          "steps": [
            "Install kubectl and minikube (or use a cloud-managed cluster if available): minikube.sigs.k8s.io",
            "Start minikube: minikube start",
            "Create a namespace: kubectl create namespace dev-team",
            "Create a ServiceAccount: kubectl create serviceaccount app-reader -n dev-team",
            "Create a Role allowing read access: kubectl create role pod-reader --verb=get,list,watch --resource=pods -n dev-team",
            "Create a RoleBinding: kubectl create rolebinding app-reader-binding --role=pod-reader --serviceaccount=dev-team:app-reader -n dev-team",
            "Test: Deploy a pod using the app-reader ServiceAccount, exec into it, and try kubectl commands",
            "Verify: The pod can list pods in dev-team but cannot create/delete pods or access other namespaces",
            "Create a ClusterRole for read-only access to nodes, and bind it to the ServiceAccount",
            "Document: Draw a diagram showing the relationship between ServiceAccount → RoleBinding → Role → API Resources"
          ]
        },
        "resources": [
          {
            "label": "Kubernetes RBAC Documentation",
            "url": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
          },
          {
            "label": "Kubernetes Authentication",
            "url": "https://kubernetes.io/docs/reference/access-authn-authz/authentication/"
          },
          {
            "label": "CNCF Kubernetes Security Best Practices",
            "url": "https://kubernetes.io/docs/concepts/security/"
          }
        ],
        "quiz": [
          "What is the difference between a Role and a ClusterRole in Kubernetes?",
          "Why should you never use the default ServiceAccount for production workloads?",
          "How can you integrate Azure AD (Entra ID) as an OIDC provider for Kubernetes authentication?",
          "What is the security risk of automounting ServiceAccount tokens?",
          "Design a Kubernetes RBAC model for a team with developers (read pods, logs) and operators (full access to specific namespaces)."
        ]
      },
      {
        "day": 2,
        "title": "Pod Identity — IRSA, Azure Workload Identity & GKE Workload Identity",
        "concepts": [
          {
            "heading": "The Pod Identity Problem",
            "body": "Pods need to access cloud services (S3, Azure Storage, GCP Cloud Storage, databases). The naive approach: store cloud credentials (access keys, service account keys) as Kubernetes Secrets. This is insecure — secrets can be leaked, they're hard to rotate, and every pod in a namespace can access them if not properly scoped.\n\nThe modern approach: Pod Identity — pods receive temporary cloud credentials based on their Kubernetes ServiceAccount, with NO stored secrets. Each cloud has its own implementation."
          },
          {
            "heading": "AWS IRSA (IAM Roles for Service Accounts)",
            "body": "IRSA allows Kubernetes ServiceAccounts in EKS to assume AWS IAM Roles. How it works:\n1. EKS cluster has an OIDC provider registered in AWS IAM\n2. An IAM Role trusts this OIDC provider with a condition matching a specific ServiceAccount\n3. When a pod with that ServiceAccount makes AWS API calls, it exchanges its K8s token for temporary AWS credentials via STS\n4. The pod gets scoped, temporary AWS credentials — no access keys stored\n\nThis is Workload Identity Federation applied to Kubernetes. The ServiceAccount annotation links the K8s identity to the AWS IAM role."
          },
          {
            "heading": "Azure Workload Identity",
            "body": "Azure Workload Identity (replacing the older AAD Pod Identity) uses similar principles for AKS:\n1. AKS cluster has a federated identity credential configured on an Azure AD App Registration\n2. A ServiceAccount is annotated with the Azure AD application client ID\n3. The Azure Identity SDK in the pod exchanges the K8s token for an Azure AD token\n4. The pod accesses Azure resources with the App Registration's permissions\n\nKey advantage: No client secrets or certificates mounted in pods. The trust is based on the OIDC token exchange."
          },
          {
            "heading": "GKE Workload Identity",
            "body": "GKE's implementation ties Kubernetes ServiceAccounts to GCP Service Accounts:\n1. Workload Identity is enabled on the GKE cluster\n2. A Kubernetes ServiceAccount is annotated with a GCP Service Account email\n3. The GKE metadata server intercepts requests and provides GCP credentials matching the bound Service Account\n4. The pod accesses GCP services as the GCP Service Account\n\nThe pattern is consistent across all three clouds: link a K8s ServiceAccount to a cloud identity, and let the platform handle credential injection."
          }
        ],
        "lab": {
          "title": "Implement Pod Identity (Choose Your Cloud)",
          "steps": [
            "Choose the cloud you have access to (AWS EKS / Azure AKS / GCP GKE) and follow that path:",
            "AWS PATH: Create an EKS cluster with OIDC provider, create an IAM role trusting the OIDC provider, annotate a ServiceAccount, deploy a pod that accesses S3 without credentials",
            "Azure PATH: Create an AKS cluster, configure federated identity credential, annotate ServiceAccount, deploy pod accessing Azure Storage",
            "GCP PATH: Create a GKE cluster with Workload Identity enabled, annotate ServiceAccount, deploy pod accessing Cloud Storage",
            "ALTERNATIVE (no cloud cluster): Study the official documentation for all three and create a comparison document",
            "For whichever path you choose, document: the trust relationship diagram, the ServiceAccount annotation, the credential flow",
            "Verify: run the pod and confirm it can access cloud resources WITHOUT any stored credentials",
            "Test negative case: remove the ServiceAccount annotation, redeploy, verify access is DENIED",
            "Document: How would you implement this in a production environment with multiple microservices, each needing different cloud permissions?"
          ]
        },
        "resources": [
          {
            "label": "AWS: IRSA Documentation",
            "url": "https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html"
          },
          {
            "label": "Azure: Workload Identity",
            "url": "https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview"
          },
          {
            "label": "GCP: GKE Workload Identity",
            "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity"
          }
        ],
        "quiz": [
          "What security problem does Pod Identity solve compared to Kubernetes Secrets?",
          "Explain how IRSA works in 5 steps.",
          "What is the common architectural pattern shared by IRSA, Azure Workload Identity, and GKE Workload Identity?",
          "A pod needs to access S3, DynamoDB, and SQS. How do you implement least privilege with IRSA?",
          "What happens if you remove the ServiceAccount annotation from a pod using IRSA?"
        ]
      },
      {
        "day": 3,
        "title": "SPIFFE/SPIRE — Universal Workload Identity",
        "concepts": [
          {
            "heading": "What is SPIFFE?",
            "body": "SPIFFE (Secure Production Identity Framework for Everyone) is a set of open standards for establishing identity for workloads in any environment — cloud, on-prem, or hybrid. It solves the problem: 'How do two microservices prove who they are to each other without hardcoded secrets?'\n\nSPIFFE provides:\n• SPIFFE ID: A URI-based identity (spiffe://trust-domain/workload-identifier)\n• SVID (SPIFFE Verifiable Identity Document): A short-lived certificate or JWT proving the workload's identity\n• Trust domains: Organisational boundaries for identity federation\n\nSPIFFE is cloud-agnostic — the same identity framework works across AWS, Azure, GCP, and on-prem."
          },
          {
            "heading": "SPIRE: The SPIFFE Runtime",
            "body": "SPIRE is the reference implementation of SPIFFE. It runs as infrastructure components:\n• SPIRE Server: The central authority that authenticates workloads and issues SVIDs\n• SPIRE Agent: Runs on each node, attests workloads, and delivers SVIDs to them\n\nWorkload attestation: SPIRE verifies workload identity through multiple signals — Kubernetes ServiceAccount, AWS instance metadata, Docker container ID, binary hash, etc. No secrets are distributed to workloads; instead, SPIRE cryptographically verifies what the workload IS."
          },
          {
            "heading": "Why SPIFFE Matters for IAM",
            "body": "SPIFFE represents the future of workload identity because:\n1. Platform-agnostic: Same identity framework across any infrastructure\n2. Zero-trust native: Workloads prove identity cryptographically, not through network position\n3. Short-lived certificates: SVIDs expire quickly (default: 1 hour), auto-rotated\n4. No secrets management: Workloads don't store credentials — they receive them dynamically\n5. Mutual TLS (mTLS): Workloads can authenticate each other for encrypted service-to-service communication\n\nSPIFFE is being adopted by Istio, Envoy, and most service mesh implementations."
          },
          {
            "heading": "Open Policy Agent (OPA) for Policy Enforcement",
            "body": "OPA (Open Policy Agent) is a general-purpose policy engine that decouples policy decisions from application logic. In Kubernetes, OPA Gatekeeper acts as an admission controller — evaluating whether a request to the cluster should be allowed based on defined policies.\n\nIAM-relevant policies:\n• Require specific labels on all pods (for audit trail)\n• Prevent containers from running as root\n• Require resource limits (prevent denial-of-service)\n• Enforce image source restrictions (only from approved registries)\n• Prevent privilege escalation in pod security contexts\n\nOPA enforces 'organisational policy as code' — similar to AWS SCPs but for Kubernetes."
          }
        ],
        "lab": {
          "title": "SPIFFE/SPIRE Concepts & OPA Introduction",
          "steps": [
            "Read the SPIFFE specification: spiffe.io — understand SPIFFE IDs, SVIDs, and trust domains",
            "Review SPIRE architecture: github.com/spiffe/spire — understand server, agent, and workload attestation",
            "Design Exercise: For the BHCNATION organisation, design a SPIFFE trust domain architecture:",
            "  Define the trust domain name and structure",
            "  List 5 workloads that need SPIFFE IDs and their identifiers",
            "  Diagram the attestation flow: How does SPIRE verify each workload?",
            "Install OPA locally: openpolicyagent.org — download the binary",
            "Write a simple OPA policy in Rego that enforces: all Kubernetes pods must have a 'team' label",
            "Test the policy against sample pod definitions (JSON) using: opa eval command",
            "Document: Compare SPIFFE to cloud-specific solutions (IRSA/Workload Identity). When would you choose SPIFFE over cloud-native?",
            "Add your SPIFFE architecture design to your portfolio"
          ]
        },
        "resources": [
          {
            "label": "SPIFFE Specification",
            "url": "https://spiffe.io/"
          },
          {
            "label": "SPIRE GitHub",
            "url": "https://github.com/spiffe/spire"
          },
          {
            "label": "Open Policy Agent",
            "url": "https://www.openpolicyagent.org/"
          },
          {
            "label": "OPA Gatekeeper for Kubernetes",
            "url": "https://open-policy-agent.github.io/gatekeeper/"
          }
        ],
        "quiz": [
          "What problem does SPIFFE solve that cloud-native Workload Identity doesn't?",
          "What is an SVID and how does it differ from a traditional TLS certificate?",
          "How does SPIRE attest workload identity without distributing secrets?",
          "What is OPA Gatekeeper and how does it enforce IAM-adjacent policies in Kubernetes?",
          "Design a workload identity strategy for a hybrid environment with on-prem VMs, AWS EKS, and Azure AKS."
        ]
      },
      {
        "day": 4,
        "title": "Service Mesh Identity & mTLS",
        "concepts": [
          {
            "heading": "Service Mesh and Identity",
            "body": "A service mesh (Istio, Linkerd, Cilium) provides infrastructure-level networking features for microservices: traffic management, observability, and security. The security feature most relevant to IAM is mutual TLS (mTLS) — every service-to-service communication is encrypted and both sides authenticate each other.\n\nWithout a service mesh: Services trust each other based on network proximity (they're in the same cluster). This violates Zero Trust.\nWith a service mesh: Every service has a cryptographic identity (typically SPIFFE-based), presents a certificate on every connection, and the receiving service validates it. Network position is irrelevant — identity is verified on every request."
          },
          {
            "heading": "Istio Security Architecture",
            "body": "Istio (the most widely deployed service mesh) provides:\n• Identity: Every workload gets a SPIFFE SVID certificate issued by Istio's CA (istiod)\n• mTLS: Automatically encrypts all service-to-service traffic with mutual authentication\n• Authorization Policies: Define which services can communicate with which other services\n• Request Authentication: Validate JWTs at the mesh level (enforce user identity even for service-to-service calls)\n\nIstio AuthorizationPolicy example:\napiVersion: security.istio.io/v1\nkind: AuthorizationPolicy\nspec:\n  rules:\n  - from:\n    - source:\n        principals: ['cluster.local/ns/payments/sa/payment-processor']\n    to:\n    - operation:\n        methods: ['GET']\n        paths: ['/api/orders/*']"
          },
          {
            "heading": "Zero Trust Networking in Practice",
            "body": "Service mesh mTLS is Zero Trust networking implemented:\n• Every communication is encrypted (assume the network is hostile)\n• Both sides authenticate (never trust without verification)\n• Authorization is per-service, per-method, per-path (least privilege)\n• All traffic is logged and observable (assume breach — detect anomalies)\n\nThis is how modern enterprises implement identity-centric networking. The network perimeter is irrelevant; identity is the perimeter."
          },
          {
            "heading": "Container Security for IAM Professionals",
            "body": "As an IAM professional, container security concepts you must understand:\n• Image provenance: Where did this container image come from? Is it signed?\n• Binary Authorization: Only allow deployment of signed, verified images\n• Secret management: How are credentials injected into containers? (Never bake into images)\n• Runtime security: Detect anomalous behavior inside running containers\n• Network policies: Kubernetes-level firewall rules between pods\n\nYou don't need to be a container expert, but you need to speak the language and understand where IAM controls apply."
          }
        ],
        "lab": {
          "title": "Service Mesh Identity Deep Dive",
          "steps": [
            "This is a research and documentation lab (service mesh requires significant infrastructure)",
            "Study Istio's security architecture: istio.io/latest/docs/concepts/security/",
            "Read about Istio AuthorizationPolicy: understand source, operation, and condition fields",
            "Design Exercise: For the BHCNATION church application (microservices version):",
            "  List 5 microservices: e.g., user-service, event-service, payment-service, notification-service, reporting-service",
            "  Design AuthorizationPolicies for each: which service can call which, on which methods/paths",
            "  Document: Which calls require mTLS only (service identity) vs. which also need user JWT validation (user identity)?",
            "Example: payment-service should only accept requests from user-service AND require a valid user JWT with 'finance:write' claim",
            "Create a service communication diagram showing all allowed flows with protocol annotations",
            "Compare: How does this service mesh authorization model relate to traditional network firewalling?",
            "Add this design to your portfolio — it demonstrates understanding of modern microservices IAM"
          ]
        },
        "resources": [
          {
            "label": "Istio Security Documentation",
            "url": "https://istio.io/latest/docs/concepts/security/"
          },
          {
            "label": "Linkerd Security Model",
            "url": "https://linkerd.io/2/features/automatic-mtls/"
          },
          {
            "label": "NIST SP 800-204: Security Strategies for Microservices",
            "url": "https://csrc.nist.gov/publications/detail/sp/800-204/final"
          }
        ],
        "quiz": [
          "What is mTLS and why is it critical for Zero Trust in microservices?",
          "How does Istio AuthorizationPolicy implement least privilege for service-to-service communication?",
          "What is the difference between service identity (mTLS certificates) and user identity (JWTs) in a mesh?",
          "Why is network-based trust (firewalls, VPNs) insufficient for modern microservices security?",
          "Design an Istio AuthorizationPolicy that allows only the payment-service to call the billing-api on POST /charges, and only with a valid user JWT."
        ]
      },
      {
        "day": 5,
        "title": "Container Identity Integration & Week Review",
        "concepts": [
          {
            "heading": "Secrets Management for Containers",
            "body": "Containers need secrets (API keys, database passwords, certificates). Best practices for container secrets management:\n\n1. NEVER bake secrets into images — they persist in image layers and registries\n2. Use external secrets managers: HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager\n3. Inject secrets at runtime via volume mounts or environment variables\n4. Use Kubernetes External Secrets Operator (ESO) to sync cloud secrets into K8s Secrets\n5. Rotate secrets automatically — containers should handle credential rotation gracefully\n6. Audit all secret access — who read which secret and when\n\nThe External Secrets Operator pattern: Define an ExternalSecret resource in K8s that references a secret in HashiCorp Vault or AWS Secrets Manager. ESO syncs it into a native K8s Secret. The pod consumes the K8s Secret normally, but the actual credential is managed externally."
          },
          {
            "heading": "Supply Chain Security for IAM",
            "body": "Container image supply chain security is an emerging IAM-adjacent concern:\n• Image signing: Sign images with cosign (Sigstore) to prove provenance\n• Binary Authorization: Only allow signed , verified images to run in your cluster\n• SBOM (Software Bill of Materials): Know what dependencies are in your images\n• Vulnerability scanning: Scan images before deployment\n\nAs an IAM professional, you may be asked to implement the policy layer: 'Only images signed by our CI/CD pipeline's identity can run in production.'"
          },
          {
            "heading": "Week 9 Integration",
            "body": "This week you've learned:\n• Kubernetes RBAC and ServiceAccounts\n• Pod Identity across three clouds (IRSA, Azure Workload Identity, GKE Workload Identity)\n• SPIFFE/SPIRE for universal, cloud-agnostic workload identity\n• Service mesh mTLS and authorization policies\n• Container secrets management\n\nThe key insight: Kubernetes and containers have their OWN identity systems that must integrate with cloud IAM and enterprise directory services. The IAM professional of 2026 must understand this full stack."
          }
        ],
        "lab": {
          "title": "Container Identity Architecture Document",
          "steps": [
            "Create a comprehensive 'Container Identity Architecture' document for your portfolio:",
            "Section 1: Kubernetes RBAC design for a multi-team cluster (namespaces, roles, bindings)",
            "Section 2: Pod Identity strategy — which cloud method to use and why (decision tree)",
            "Section 3: Secrets management architecture — HashiCorp Vault + External Secrets Operator flow diagram",
            "Section 4: Service mesh authorization design — AuthorizationPolicies for a sample microservices application",
            "Section 5: Supply chain security — image signing and binary authorization policy",
            "Include diagrams for each section (use draw.io / app.diagrams.net)",
            "Review: Does your design follow Zero Trust principles at every layer?",
            "Add to your GitHub portfolio",
            "Update your LinkedIn profile to mention Kubernetes identity / container security expertise"
          ]
        },
        "resources": [
          {
            "label": "External Secrets Operator",
            "url": "https://external-secrets.io/"
          },
          {
            "label": "Sigstore / Cosign",
            "url": "https://www.sigstore.dev/"
          },
          {
            "label": "Kubernetes Security Best Practices",
            "url": "https://kubernetes.io/docs/concepts/security/overview/"
          }
        ],
        "quiz": [
          "What is the External Secrets Operator and how does it bridge cloud secrets managers with Kubernetes?",
          "Why should you never bake secrets into container images?",
          "What is Binary Authorization and how does it relate to IAM?",
          "Design a complete identity architecture for a Kubernetes-based application that accesses AWS S3, Azure SQL, and GCP BigQuery.",
          "How does the concept of 'identity as the perimeter' apply specifically to container environments?"
        ]
      }
    ]
  },
  {
    "week": 10,
    "title": "Identity Threat Detection & Response (ITDR)",
    "theme": "Detect, investigate, and respond to identity-based attacks — the fastest-growing IAM discipline.",
    "days": [
      {
        "day": 1,
        "title": "ITDR Fundamentals — Identity IS the Attack Surface",
        "concepts": [
          {
            "heading": "What is ITDR?",
            "body": "Identity Threat Detection and Response (ITDR) is a security discipline focused on detecting and responding to attacks that target identity infrastructure. Gartner named it a top security trend for 2023-2026. ITDR recognises that identity systems (Active Directory, Entra ID, Okta, AWS IAM) are primary attack targets — not just access controls.\n\nTraditional security monitors networks and endpoints. ITDR monitors the identity layer:\n• Who is authenticating and from where?\n• Are privilege escalations legitimate?\n• Are tokens being stolen or replayed?\n• Are service accounts behaving normally?\n• Are directory configurations being tampered with?"
          },
          {
            "heading": "The Identity Attack Kill Chain",
            "body": "Modern attacks follow an identity-centric pattern:\n1. Initial Access: Phishing → stolen credentials (most common entry)\n2. Credential Access: Dump credentials from memory, steal tokens, Kerberoast\n3. Lateral Movement: Use stolen credentials to move between systems (Pass-the-Hash, Pass-the-Ticket)\n4. Privilege Escalation: Exploit misconfigurations to gain admin access (BloodHound attack paths)\n5. Persistence: Create backdoor accounts, modify group memberships, forge tokens (Golden Ticket)\n6. Impact: Data exfiltration, ransomware deployment, business disruption\n\nITDR aims to detect and break this chain at every stage."
          },
          {
            "heading": "Identity Attack Techniques (MITRE ATT&CK)",
            "body": "Key identity techniques from MITRE ATT&CK:\n• T1078: Valid Accounts — using legitimate credentials\n• T1110: Brute Force — password spraying, credential stuffing\n• T1558: Steal or Forge Kerberos Tickets — Golden/Silver tickets\n• T1003: OS Credential Dumping — Mimikatz, LSASS\n• T1556: Modify Authentication Process — backdooring auth\n• T1098: Account Manipulation — adding permissions, modifying groups\n• T1136: Create Account — persistence through new accounts\n• T1550: Use Alternate Authentication Material — token theft\n\nKnowing these TTPs helps you build detection rules."
          },
          {
            "heading": "ITDR vs Traditional Security Monitoring",
            "body": "Traditional SIEM: Monitors logs broadly, generates alerts on known patterns.\nITDR: Specifically analyses identity signals with identity context.\n\nExample: A SIEM sees 'User logged in from new IP.' An ITDR solution sees 'User authenticated from a new IP using a token that was issued 3 hours ago from a different country, accessed a privileged application they've never used before, and the token shows signs of being replayed.' Context is everything."
          }
        ],
        "lab": {
          "title": "Map the Identity Attack Surface",
          "steps": [
            "Create an 'Identity Attack Surface Map' for your lab environment:",
            "List all identity stores: AD DS, Entra ID, AWS IAM, GCP IAM, any local accounts",
            "For each, list: number of accounts, privileged accounts, service accounts, external/guest accounts",
            "For each privileged account: document the attack path (how could it be compromised?)",
            "Map your environment to MITRE ATT&CK identity techniques: which techniques apply?",
            "For each applicable technique: do you have detection in place? If not, note it as a gap.",
            "Priority ranking: Which 5 detection gaps would you close first and why?",
            "Document this as your 'ITDR Assessment Report' — portfolio piece"
          ]
        },
        "resources": [
          {
            "label": "Gartner: Top Security Trends (ITDR)",
            "url": "https://www.gartner.com/en/articles/top-security-and-risk-management-trends"
          },
          {
            "label": "MITRE ATT&CK: Identity Techniques",
            "url": "https://attack.mitre.org/tactics/TA0006/"
          },
          {
            "label": "CrowdStrike: What is ITDR?",
            "url": "https://www.crowdstrike.com/cybersecurity-101/identity-threat-detection-and-response-itdr/"
          }
        ],
        "quiz": [
          "What is ITDR and why has it become a top security priority?",
          "Walk through the identity attack kill chain with specific techniques at each stage.",
          "Name 5 MITRE ATT&CK techniques that target identity systems.",
          "How does ITDR differ from traditional SIEM-based security monitoring?",
          "What makes identity the primary attack surface in modern enterprises?"
        ]
      },
      {
        "day": 2,
        "title": "Entra ID Protection — Risk-Based Identity Security",
        "concepts": [
          {
            "heading": "Microsoft Entra ID Protection",
            "body": "Entra ID Protection (formerly Azure AD Identity Protection) uses machine learning to detect identity risks in real-time. It analyses billions of signals from Microsoft's ecosystem to calculate two risk levels:\n\n• User Risk: Likelihood that an account has been compromised (leaked credentials, anomalous behaviour patterns, threat intelligence matches)\n• Sign-in Risk: Likelihood that a specific authentication request is not from the legitimate user (impossible travel, anonymous IP, malware-linked IP, unfamiliar sign-in properties)\n\nRisk levels: Low, Medium, High. You build Conditional Access policies that respond to these risk levels."
          },
          {
            "heading": "Risk-Based Conditional Access Policies",
            "body": "Integrating Identity Protection with Conditional Access creates adaptive security:\n\n• Low sign-in risk: Allow access, no extra verification\n• Medium sign-in risk: Require MFA\n• High sign-in risk: Block access entirely\n• Low user risk: Allow, monitor\n• Medium user risk: Require password change + MFA\n• High user risk: Block until admin investigation\n\nThis is adaptive authentication — the security posture adjusts dynamically based on real-time risk assessment. Users with low risk get frictionless access; high-risk events trigger immediate protection."
          },
          {
            "heading": "Investigating Risk Events",
            "body": "Identity Protection generates risk detections (events) that must be investigated:\n• Impossible travel: Sign-ins from geographically distant locations within impossible timeframes\n• Anonymous IP address: Sign-in from known anonymous proxies (Tor, VPN services)\n• Unfamiliar sign-in properties: Sign-in from new device + location + app combination\n• Malware-linked IP: Sign-in from IP associated with bot/malware activity\n• Leaked credentials: User's credentials found in data breach databases\n• Password spray: Multiple accounts targeted with common passwords\n\nEach detection has a severity and confidence level. Your investigation process: confirm or dismiss the risk, take remediation action, document findings."
          },
          {
            "heading": "Automated Remediation",
            "body": "Identity Protection can automatically remediate confirmed risks:\n• Self-service password reset: Force password change for compromised accounts\n• MFA challenge: Require re-verification for suspicious sign-ins\n• Block access: Immediately prevent access for high-risk accounts\n• Require compliant device: Ensure the device meets security standards\n\nAutomation is critical — manual investigation of every alert doesn't scale. Configure automated policies for clear-cut cases and investigate ambiguous ones manually."
          }
        ],
        "lab": {
          "title": "Configure Entra ID Protection",
          "steps": [
            "In your M365 dev tenant, navigate to Entra ID → Security → Identity Protection",
            "Review the Risk Detections dashboard — note any existing detections",
            "Review Risky Users — check if any test accounts show risk",
            "Create a User Risk Policy: Security → Identity Protection → User risk policy",
            "  Users: All users | User risk: Medium and above | Access: Allow with password change required",
            "Create a Sign-in Risk Policy: Sign-in risk policy",
            "  Users: All users | Sign-in risk: Medium and above | Access: Allow with MFA required | High: Block",
            "Simulate a risky sign-in: Use Tor Browser to sign in as your test user (or use an anonymous VPN)",
            "Check: Does the sign-in appear as a risk detection? What risk type and level?",
            "Navigate to Risky sign-ins report → review the details of your simulated attack",
            "Document: Screenshot your risk policies and the detection. Explain your policy rationale."
          ]
        },
        "resources": [
          {
            "label": "Microsoft: Entra ID Protection Documentation",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/"
          },
          {
            "label": "Microsoft: Risk-based Conditional Access",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/howto-conditional-access-policy-risk"
          }
        ],
        "quiz": [
          "What is the difference between user risk and sign-in risk in Entra ID Protection?",
          "Design a risk-based Conditional Access policy set for a 500-person organisation.",
          "What is impossible travel detection and how would you investigate a flagged event?",
          "Why is automated remediation important for identity protection at scale?",
          "A user's risk level is 'High' due to leaked credentials. Walk through the remediation process."
        ]
      },
      {
        "day": 3,
        "title": "AWS & GCP Identity Threat Detection",
        "concepts": [
          {
            "heading": "AWS GuardDuty for IAM",
            "body": "AWS GuardDuty analyses CloudTrail, VPC Flow Logs, and DNS logs to detect threats. IAM-relevant GuardDuty findings:\n• UnauthorizedAccess:IAMUser/ConsoleLoginSuccess.B: Successful console login from unusual location\n• UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration: EC2 instance credentials used from outside AWS\n• Discovery:IAMUser/AnomalousAPIActivity: Unusual API calls for the user's baseline\n• PenTest:IAMUser/KaliLinux: API calls from known penetration testing distributions\n• Persistence:IAMUser/UserPermissions: Unusual IAM policy changes\n• CredentialAccess:IAMUser/AnomalousBehavior: Credential access patterns that deviate from baseline"
          },
          {
            "heading": "GCP Security Command Center",
            "body": "GCP's Security Command Center (SCC) provides IAM threat detection:\n• Event Threat Detection: Analyses audit logs for suspicious activity\n• IAM Recommender: Identifies over-privileged accounts\n• Anomalous IAM Grant: Detects unusual permission grants\n• Service Account Key Leakage: Detects service account keys committed to public repositories\n• Brute Force SSH: Detects SSH credential attacks on VMs\n\nSCC Premium tier adds Container Threat Detection and Virtual Machine Threat Detection."
          },
          {
            "heading": "Building Custom Detection Rules",
            "body": "Beyond built-in detections, IAM professionals build custom rules:\n\n1. Impossible travel: Flag when same account authenticates from locations >500km apart within 1 hour\n2. Unusual time: Flag admin actions outside business hours from non-break-glass accounts\n3. Privilege escalation: Alert when a user adds themselves to admin groups\n4. Service account anomaly: Alert when a service account performs actions outside its established baseline\n5. MFA bypass: Alert when MFA is disabled for any account\n6. Dormant account activation: Alert when an account inactive >90 days suddenly becomes active\n\nThese rules are implemented in your SIEM (Sentinel, Splunk, Chronicle) using query languages like KQL, SPL, or YARA-L."
          },
          {
            "heading": "Token Theft Detection",
            "body": "Token theft is the modern credential theft. Attackers steal OAuth tokens or session cookies rather than passwords — these tokens bypass MFA.\n\nDetection strategies:\n• Token replay detection: Flag when the same token is used from multiple IPs\n• Continuous Access Evaluation (CAE): Revoke tokens in near-real-time when conditions change\n• Primary Refresh Token (PRT) monitoring: Detect extraction of Windows device PRTs\n• Session cookie monitoring: Detect AiTM (Adversary-in-the-Middle) attacks that steal session cookies\n\nMicrosoft's CAE implementation: When a user is disabled or their location changes, all active tokens are revoked within minutes rather than waiting for token expiry."
          }
        ],
        "lab": {
          "title": "Identity Threat Detection Across Clouds",
          "steps": [
            "AWS: Enable GuardDuty if not already active: GuardDuty → Get Started → Enable",
            "Review any existing GuardDuty findings related to IAM",
            "AWS: Create a CloudWatch Events rule to alert on IAM policy changes: EventBridge → Rules → IAM events",
            "GCP: Review Security Command Center findings: Security → Security Command Center",
            "Entra ID: Review Sign-in logs for the past week: Entra ID → Sign-in logs",
            "  Filter by: Status = Failure | Conditional Access = Not Applied",
            "Create a detection rule document with 10 custom identity detection rules:",
            "  For each rule: Name, Description, Data Source, Detection Logic (pseudocode), Severity, Response Action",
            "Research: What is an AiTM (Adversary-in-the-Middle) attack and how does it steal tokens post-MFA?",
            "Document your findings as an 'Identity Threat Detection Playbook'"
          ]
        },
        "resources": [
          {
            "label": "AWS GuardDuty IAM Findings",
            "url": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-iam.html"
          },
          {
            "label": "GCP Security Command Center",
            "url": "https://cloud.google.com/security-command-center/docs"
          },
          {
            "label": "Microsoft: Token Theft Playbook",
            "url": "https://learn.microsoft.com/en-us/security/operations/token-theft-playbook"
          }
        ],
        "quiz": [
          "Name 3 AWS GuardDuty findings related to IAM threats.",
          "What is token theft and why does it bypass MFA?",
          "What is Continuous Access Evaluation (CAE) and how does it improve token security?",
          "Design 5 custom identity detection rules with their data sources and logic.",
          "How would you detect if an attacker used an AiTM attack to steal a user's session?"
        ]
      },
      {
        "day": 4,
        "title": "Identity Forensics & Incident Response",
        "concepts": [
          {
            "heading": "Identity Incident Response",
            "body": "When an identity compromise is confirmed, the response follows a specific playbook:\n\n1. CONTAIN:\n   • Disable the compromised account immediately\n   • Revoke all active sessions and tokens (Entra: Revoke Sessions; AWS: delete access keys)\n   • Reset password and MFA registration\n   • If service account: rotate all credentials\n\n2. INVESTIGATE:\n   • Determine initial compromise vector (phishing, leaked creds, malware)\n   • Map lateral movement using audit logs\n   • Identify all systems/data accessed by the compromised account\n   • Check for persistence (new accounts created, group memberships changed, backdoors)\n\n3. REMEDIATE:\n   • Remove any persistent access (backdoor accounts, unauthorized permissions)\n   • Patch the vulnerability that enabled the compromise\n   • Reset credentials for any accounts that may have been exposed\n\n4. RECOVER:\n   • Re-enable user with new credentials and verified MFA\n   • Monitor closely for 30 days\n   • Update detection rules to catch similar attacks"
          },
          {
            "heading": "Log Analysis for Identity Forensics",
            "body": "Key logs for identity forensics:\n\n• Entra ID Sign-in Logs: Every authentication attempt with details (IP, device, location, CA policy result)\n• Entra ID Audit Logs: Directory changes (user created, group membership changed, app permission granted)\n• AD Security Event Log: On-prem authentication events, privilege use, account management\n• AWS CloudTrail: Every API call with IAM context (who, what, when, from where)\n• GCP Cloud Audit Logs: Admin activity, data access, system events\n\nForensics queries:\n• 'Show all actions by this user in the 72 hours before and after the compromise timestamp'\n• 'Show all accounts that authenticated from this IP address'\n• 'Show all group membership changes in the past 7 days'\n• 'Show all new service accounts created in the past 30 days'"
          },
          {
            "heading": "Purple Teaming for Identity",
            "body": "Purple teaming combines red team (offensive) and blue team (defensive) testing. For identity:\n\nRed team actions:\n• Simulate phishing to capture credentials\n• Test Kerberoasting against service accounts\n• Attempt lateral movement with harvested tickets\n• Try to escalate privileges via BloodHound paths\n• Simulate token theft\n\nBlue team validation:\n• Did we detect each attack technique?\n• How long from attack to detection?\n• Did the automated response work?\n• Were the alerts actionable?\n• What gaps remain?\n\nThis should be done at least annually and after major IAM infrastructure changes."
          }
        ],
        "lab": {
          "title": "Build an Identity Incident Response Playbook",
          "steps": [
            "Create a comprehensive Identity IR Playbook with these sections:",
            "Section 1: Compromise Type Decision Tree — for each type (phished user, leaked creds, compromised service account, compromised admin), list the specific response steps",
            "Section 2: Log Sources Quick Reference — where to find each log type, key fields to analyse, KQL/SPL queries",
            "Section 3: Containment Checklist — step-by-step for Entra ID, AD DS, AWS IAM, GCP IAM",
            "Section 4: Communication Template — who to notify, what to say, when",
            "Section 5: Post-Incident Review Template — what happened, timeline, root cause, improvements",
            "Include at least 5 specific KQL queries for Entra ID sign-in log analysis:",
            "  Example: SigninLogs | where ResultType != 0 | where UserPrincipalName == 'compromised@company.com' | project TimeGenerated, IPAddress, Location, AppDisplayName, ResultDescription",
            "Review NIST SP 800-61 (Computer Security Incident Handling Guide) for framework alignment",
            "Add this playbook to your portfolio — IR playbooks demonstrate operational maturity"
          ]
        },
        "resources": [
          {
            "label": "NIST SP 800-61: Incident Handling Guide",
            "url": "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final"
          },
          {
            "label": "Microsoft: Investigate Incidents in Entra ID",
            "url": "https://learn.microsoft.com/en-us/azure/active-directory/reports-monitoring/howto-investigate-activity-logs"
          },
          {
            "label": "AWS: Incident Response Guide",
            "url": "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/"
          }
        ],
        "quiz": [
          "Walk through the four phases of identity incident response with specific actions at each phase.",
          "A Global Admin account is compromised via phishing. List every containment step in priority order.",
          "What are the 5 most important log queries you'd run during an identity compromise investigation?",
          "What is purple teaming for identity and why is it important?",
          "How do you detect persistence after an identity compromise is contained?"
        ]
      },
      {
        "day": 5,
        "title": "ITDR Architecture & Week Review",
        "concepts": [
          {
            "heading": "Building an ITDR Program",
            "body": "An enterprise ITDR program requires:\n\n1. Visibility: Comprehensive logging from all identity sources (AD, Entra ID, AWS, GCP, SaaS)\n2. Detection: Rules and ML models for identity-specific threats\n3. Investigation: Workflows and tools for rapid analysis\n4. Response: Automated and manual playbooks for containment\n5. Prevention: Lessons learned fed back into security controls\n\nITDR tooling landscape:\n• Microsoft Defender for Identity: Monitors on-prem AD for identity attacks\n• CrowdStrike Identity Threat Protection: Cross-platform ITDR\n• SentinelOne Singularity Identity: AD and Entra ID protection\n• Semperis: AD-specific threat detection and disaster recovery\n• Silverfort: Unified identity protection with MFA injection for legacy protocols"
          },
          {
            "heading": "Week 10 Integration",
            "body": "You can now:\n• Understand the identity attack kill chain and MITRE ATT&CK identity techniques\n• Configure Entra ID Protection with risk-based Conditional Access\n• Leverage AWS GuardDuty and GCP SCC for cloud identity threats\n• Perform identity forensics using audit logs across platforms\n• Build and execute identity incident response playbooks\n• Design an ITDR program architecture\n\nITDR expertise makes you uniquely valuable — it bridges the gap between IAM operations and security operations (SOC). Few professionals have deep skills in both."
          }
        ],
        "lab": {
          "title": "ITDR Program Design",
          "steps": [
            "Create an ITDR Program Design document for a hypothetical mid-size enterprise (500-2000 employees):",
            "Architecture diagram: Show all identity sources → log aggregation (SIEM) → detection engine → response workflows",
            "Detection coverage matrix: Map MITRE ATT&CK identity techniques to your detection rules",
            "Tool selection: Recommend specific tools for each ITDR function with justification",
            "Metrics: Define 5 KPIs for measuring ITDR program effectiveness",
            "  Examples: Mean Time to Detect (MTTD), Mean Time to Respond (MTTR), False Positive Rate",
            "Maturity model: Define Level 1 (basic) through Level 5 (advanced) for your ITDR program",
            "Present this as a 'board-level' security program proposal",
            "Add to your GitHub portfolio"
          ]
        },
        "resources": [
          {
            "label": "Microsoft Defender for Identity",
            "url": "https://learn.microsoft.com/en-us/defender-for-identity/"
          },
          {
            "label": "Semperis: AD Threat Detection",
            "url": "https://www.semperis.com/"
          },
          {
            "label": "Gartner: ITDR Market Guide",
            "url": "https://www.gartner.com/en/articles/how-to-detect-and-mitigate-identity-threats"
          }
        ],
        "quiz": [
          "What are the five pillars of an ITDR program?",
          "Compare three commercial ITDR solutions and their key differentiators.",
          "Define 5 KPIs for measuring ITDR program effectiveness.",
          "How does ITDR bridge traditional IAM operations and security operations (SOC)?",
          "Design an ITDR architecture for a hybrid environment with AD, Entra ID, and AWS."
        ]
      }
    ]
  },
  {
    "week": 11,
    "title": "Compliance Frameworks & IAM Audits",
    "theme": "Master the compliance landscape — SOX, HIPAA, GDPR, PCI-DSS — and learn to conduct IAM audits.",
    "days": [
      {
        "day": 1,
        "title": "Compliance Frameworks Overview for IAM",
        "concepts": [
          {
            "heading": "Why Compliance Matters for IAM",
            "body": "Every IAM control you build serves compliance requirements. Regulated industries (finance, healthcare, government) require demonstrable evidence that access controls are properly designed, implemented, and monitored. IAM professionals who understand compliance speak the language of auditors, legal, and executive leadership — making them far more valuable than those who only know the technology.\n\nKey frameworks:\n• SOX (Sarbanes-Oxley): Financial reporting integrity — Section 404 requires internal controls over financial systems access\n• HIPAA: Healthcare data protection — access controls for Protected Health Information (PHI)\n• GDPR: EU data privacy — right of access, right to erasure, lawful processing of personal data\n• PCI-DSS: Payment card data security — strict access control requirements for cardholder data environments\n• ISO 27001: Information security management — Annex A.9 covers access control\n• NIST CSF: Cybersecurity framework — Identity function is one of five core functions"
          },
          {
            "heading": "SOX Section 404 and IAM",
            "body": "SOX applies to public companies and requires internal controls over financial reporting. IAM requirements:\n• Segregation of Duties (SoD): The person who creates a financial transaction cannot approve it\n• Access reviews: Regular certification that financial system access is appropriate\n• Privileged access management: Admin access to financial systems must be tightly controlled and logged\n• Change management: Changes to access controls must follow documented change management\n• Audit trails: Complete logs of who accessed financial systems and when\n\nSOX audits are annual. Auditors review IAM controls as a critical part of the overall IT General Controls (ITGC) assessment."
          },
          {
            "heading": "HIPAA Security Rule for IAM",
            "body": "HIPAA requires 'Technical Safeguards' for protecting electronic Protected Health Information (ePHI):\n• Access Control (§164.312(a)): Unique user identification, emergency access procedure, automatic logoff, encryption\n• Audit Controls (§164.312(b)): Hardware/software mechanisms to record and examine access to ePHI\n• Integrity (§164.312(c)): Protect ePHI from improper alteration or destruction\n• Transmission Security (§164.312(e)): Protect ePHI during electronic transmission\n\nPractical IAM implications: Unique accounts per user (no shared accounts), MFA for remote access, role-based access to clinical systems, audit logs retained for 6 years, automatic session timeout."
          },
          {
            "heading": "GDPR and Identity Data",
            "body": "GDPR has direct implications for how identity data is managed:\n• Lawful Basis: You need a legal basis to process identity data (user accounts contain personal data)\n• Data Minimisation: Only collect identity attributes you actually need\n• Right of Access (Article 15): Users can request to see what data you hold about them\n• Right to Erasure (Article 17): Users can request deletion of their data\n• Data Protection Impact Assessment: Required for high-risk processing of personal data\n• Breach Notification: 72-hour notification requirement for personal data breaches\n\nIAM systems ARE personal data systems — they contain names, emails, phone numbers, employment data. Your IAM infrastructure must comply with GDPR."
          }
        ],
        "lab": {
          "title": "Compliance Requirements Mapping",
          "steps": [
            "Create a Compliance Requirements Matrix (spreadsheet or table):",
            "Columns: Control ID | Control Description | SOX | HIPAA | GDPR | PCI-DSS | ISO 27001 | NIST CSF",
            "Rows: Map at least 15 IAM controls: MFA, RBAC, access reviews, password policy, audit logging, SoD, JML process, privileged access, session management, encryption, data retention, breach notification, least privilege, service account management, third-party access",
            "For each cell: mark Applicable/Not Applicable, and note the specific clause/section",
            "Identify: Which IAM controls satisfy the most frameworks simultaneously? (hint: audit logging, access reviews, and MFA are near-universal)",
            "Identify: Which framework has the strictest IAM requirements?",
            "Add this matrix to your portfolio — compliance mapping is a high-value consulting deliverable"
          ]
        },
        "resources": [
          {
            "label": "NIST CSF 2.0 Framework",
            "url": "https://www.nist.gov/cyberframework"
          },
          {
            "label": "ISO 27001 Annex A Controls",
            "url": "https://www.iso.org/standard/27001"
          },
          {
            "label": "PCI-DSS v4.0 Requirements",
            "url": "https://www.pcisecuritystandards.org/document_library/"
          }
        ],
        "quiz": [
          "How does SOX Section 404 specifically relate to IAM controls?",
          "What HIPAA Technical Safeguards require IAM controls?",
          "How does GDPR impact identity data management in your IAM systems?",
          "Which IAM control satisfies requirements across the most compliance frameworks?",
          "A healthcare company also processes credit card payments. Which compliance frameworks apply and what overlapping IAM controls exist?"
        ]
      },
      {
        "day": 2,
        "title": "PCI-DSS v4.0 & ISO 27001 Annex A.9",
        "concepts": [
          {
            "heading": "PCI-DSS v4.0 IAM Requirements",
            "body": "PCI-DSS v4.0 (effective March 2025) significantly strengthened IAM requirements:\n\nRequirement 7: Restrict Access by Business Need to Know\n• 7.2.1: Access to system components is defined and assigned based on individuals' job classification/function\n• 7.2.2: Access is assigned based on least privilege principle\n• 7.2.5: All application and system accounts and privileges are reviewed at least every 6 months\n\nRequirement 8: Identify Users and Authenticate Access\n• 8.3.1: MFA for all non-console administrative access to the CDE (Cardholder Data Environment)\n• 8.3.6: Minimum password length increased to 12 characters (was 7)\n• 8.4.2: MFA for all access into the CDE (new in v4.0)\n• 8.6.1: Interactive logins for system/service accounts prevented where possible\n• 8.6.3: Passwords for service accounts changed periodically AND on suspicion of compromise"
          },
          {
            "heading": "ISO 27001 Annex A.9: Access Control",
            "body": "ISO 27001 Annex A.9 specifically addresses access control:\n\nA.9.1 Business requirements for access control\n• A.9.1.1: Access control policy must be documented based on business/security requirements\n• A.9.1.2: Users only have access to networks they're specifically authorised for\n\nA.9.2 User access management\n• A.9.2.1: Formal user registration and de-registration process\n• A.9.2.2: Formal access provisioning process\n• A.9.2.3: Management of privileged access rights\n• A.9.2.4: Management of secret authentication information (credentials)\n• A.9.2.5: Review of user access rights at regular intervals\n• A.9.2.6: Removal of access rights upon employment termination\n\nA.9.3 User responsibilities\n• Secure use of authentication information\n\nA.9.4 System and application access control\n• Secure logon procedures, password management, access restrictions"
          },
          {
            "heading": "Evidence Collection for Audits",
            "body": "Auditors don't take your word for it — they need evidence. Key evidence types for IAM audits:\n\n• Policy Documents: Written, approved, dated access control policy\n• Process Documentation: JML process, access review process, incident response\n• Technical Configuration: Screenshots/exports of RBAC configuration, Conditional Access policies, MFA settings\n• Access Review Records: Completed access certifications with approver signatures\n• Change Records: Tickets for access changes showing approval workflow\n• Log Samples: Audit log excerpts showing controls are functioning\n• Exception Records: Documented exceptions with approved risk acceptance\n\nPro tip: Maintain a continuous 'evidence library' rather than scrambling before each audit."
          }
        ],
        "lab": {
          "title": "Build an IAM Controls Evidence Library",
          "steps": [
            "Create an 'IAM Controls Evidence Library' structure in your documentation system:",
            "Folder 1: Policies — Write a sample Access Control Policy (1-2 pages, covering: purpose, scope, roles, password requirements, access review schedule, exception process)",
            "Folder 2: Processes — Document your JML process with flowcharts",
            "Folder 3: Technical Evidence — Export/screenshot your lab's Conditional Access policies, MFA configuration, RBAC assignments, and Group Policy settings",
            "Folder 4: Access Reviews — Create a sample access review template (spreadsheet: User | Role | Granted Date | Business Justification | Reviewer | Decision | Review Date)",
            "Folder 5: Audit Logs — Export sample sign-in logs and privileged activity logs",
            "Folder 6: Exception Register — Create a template for documenting approved exceptions to IAM policy",
            "Review your library against ISO 27001 A.9 controls — which controls have evidence? Which need more documentation?",
            "This evidence library structure is directly usable in professional IAM roles"
          ]
        },
        "resources": [
          {
            "label": "PCI-DSS v4.0 Full Standard",
            "url": "https://www.pcisecuritystandards.org/document_library/"
          },
          {
            "label": "ISO 27001:2022 Overview",
            "url": "https://www.iso.org/isoiec-27001-information-security.html"
          }
        ],
        "quiz": [
          "What are the key changes in PCI-DSS v4.0 for IAM compared to v3.2.1?",
          "List all ISO 27001 Annex A.9 sub-controls and explain each briefly.",
          "What types of evidence do auditors expect for IAM controls?",
          "Why is maintaining a continuous evidence library better than preparing for each audit?",
          "Design an access review process that satisfies both SOX and PCI-DSS requirements."
        ]
      },
      {
        "day": 3,
        "title": "NIST CSF Identity Function & Zero Trust Architecture",
        "concepts": [
          {
            "heading": "NIST CSF 2.0 — Identity Function",
            "body": "The NIST Cybersecurity Framework 2.0 (published 2024) includes GOVERN as a new top-level function and expands the IDENTIFY function. Identity-specific categories:\n\nID.AM (Asset Management): Know what identities exist and what they access\nID.RA (Risk Assessment): Identify risks to identity infrastructure\nPR.AA (Identity Management, Authentication, & Access Control): Active management of identities and access\nPR.AA-01: Identities and credentials are issued, managed, verified, revoked, and audited\nPR.AA-02: Identities are proofed and bound to credentials\nPR.AA-03: Users, devices, and other assets are authenticated commensurate with risk\nPR.AA-04: Identity assertions are protected in transit\nPR.AA-05: Access permissions, entitlements, and authorizations are defined and managed\nPR.AA-06: Physical access is managed"
          },
          {
            "heading": "NIST SP 800-207: Zero Trust Architecture",
            "body": "NIST's Zero Trust Architecture standard defines the principles your IAM implementation should follow:\n\n1. All data sources and computing services are considered resources\n2. All communication is secured regardless of network location\n3. Access to individual enterprise resources is granted on a per-session basis\n4. Access is determined by dynamic policy — including client identity, application, and behavioural attributes\n5. Enterprise monitors and measures integrity and security posture of all owned and associated assets\n6. All resource authentication and authorization is dynamic and strictly enforced before access is allowed\n7. Enterprise collects information about the current state of assets, network infrastructure, and communications and uses it to improve security posture\n\nEvery IAM control you've built in this course implements one or more of these principles."
          },
          {
            "heading": "Zero Trust Maturity Model",
            "body": "CISA's Zero Trust Maturity Model has five pillars:\n1. Identity: Continuous validation. MFA everywhere. Risk-based access.\n2. Devices: Endpoint compliance. Device health attestation.\n3. Networks: Micro-segmentation. Encrypted communications.\n4. Applications: Secure access. Application-level authorisation.\n5. Data: Data classification. DLP. Encryption.\n\nAnd three maturity levels:\n• Traditional: Perimeter-based, static policies, manual processes\n• Advanced: Risk-informed, some automation, integrated identity\n• Optimal: Continuous verification, fully automated, real-time analytics"
          }
        ],
        "lab": {
          "title": "Zero Trust Maturity Assessment",
          "steps": [
            "Using the CISA Zero Trust Maturity Model, assess your lab environment:",
            "For each pillar (Identity, Devices, Networks, Applications, Data):",
            "  Rate current maturity: Traditional / Advanced / Optimal",
            "  List evidence supporting your rating",
            "  Identify gaps preventing advancement to the next level",
            "  Propose specific improvements with effort estimates",
            "Create a Zero Trust Roadmap: a phased plan showing how to move from current maturity to target maturity",
            "Phase 1 (Quick wins — 0-3 months): What can you implement immediately?",
            "Phase 2 (Foundation — 3-6 months): What requires infrastructure changes?",
            "Phase 3 (Advanced — 6-12 months): What requires cultural/process changes?",
            "Map each improvement to specific NIST CSF categories",
            "Present this as an executive summary — a one-page recommendation for leadership"
          ]
        },
        "resources": [
          {
            "label": "NIST CSF 2.0",
            "url": "https://www.nist.gov/cyberframework/framework"
          },
          {
            "label": "NIST SP 800-207: Zero Trust Architecture",
            "url": "https://csrc.nist.gov/publications/detail/sp/800-207/final"
          },
          {
            "label": "CISA Zero Trust Maturity Model",
            "url": "https://www.cisa.gov/zero-trust-maturity-model"
          }
        ],
        "quiz": [
          "List the 7 principles of NIST SP 800-207 Zero Trust Architecture.",
          "What are the five pillars of the CISA Zero Trust Maturity Model?",
          "How does the NIST CSF 2.0 Identity function relate to the IAM controls you've built?",
          "Assess your lab environment against the Zero Trust Maturity Model. Where are you strongest/weakest?",
          "A CISO asks you to present a 'Zero Trust Roadmap.' What goes on slide 1?"
        ]
      },
      {
        "day": 4,
        "title": "Conducting & Surviving IAM Audits",
        "concepts": [
          {
            "heading": "The IAM Audit Process",
            "body": "An IAM audit typically follows this lifecycle:\n\n1. Scoping: Auditor defines which systems, processes, and controls are in scope\n2. Document Review: Auditor reviews your policies, procedures, and process documentation\n3. Walkthrough: Auditor walks through key processes with you (JML, access review, privileged access)\n4. Evidence Collection: Auditor requests specific evidence (logs, configurations, access lists)\n5. Testing: Auditor independently tests controls (can they access something they shouldn't? Are logs complete?)\n6. Findings: Auditor documents any control deficiencies (gaps, weaknesses, failures)\n7. Report: Formal audit report with findings, severity ratings, and remediation recommendations\n8. Remediation: You fix the findings and provide evidence of remediation\n\nAs the IAM professional, you are the subject matter expert the auditor interviews. How you present your controls matters."
          },
          {
            "heading": "Common IAM Audit Findings",
            "body": "The findings that auditors report most frequently:\n\n1. Orphaned accounts: Active accounts for terminated employees (JML process failure)\n2. Excessive privileges: Users with permissions beyond their job function\n3. Incomplete access reviews: Reviews not conducted on schedule, or rubber-stamped without genuine review\n4. Weak password policies: Short passwords, no complexity, no MFA for privileged access\n5. Shared accounts: Multiple people using the same credentials (no individual accountability)\n6. Unmonitored privileged access: Admin accounts without enhanced logging or session recording\n7. Missing audit logs: Gaps in logging coverage or inadequate log retention\n8. Undocumented exceptions: Policy exceptions granted without formal approval and time limits\n9. Stale service accounts: Service accounts with privileges but no active owner or review\n10. Third-party access ungoverned: Vendor/contractor access without time-limited contracts and regular review\n\nKnow these by heart — you will encounter them."
          },
          {
            "heading": "GRC Tools for IAM",
            "body": "Governance, Risk, and Compliance (GRC) tools help manage audit evidence, track findings, and automate compliance:\n\n• ServiceNow GRC: Integrated with IT service management. Automates control testing and evidence collection.\n• Archer (by RSA): Enterprise risk management. Policy management, compliance tracking.\n• OneTrust: Privacy and compliance platform. Strong GDPR/privacy compliance.\n• Vanta: Automated compliance for SOC 2, ISO 27001, HIPAA. Popular with startups.\n• Drata: Continuous security and compliance automation.\n• SailPoint / Saviynt: IGA platforms with built-in compliance reporting and access certification.\n\nIn practice, IAM controls feed evidence INTO GRC platforms. Understanding how your IAM data supports the GRC process makes you essential to the compliance team."
          }
        ],
        "lab": {
          "title": "Simulate an IAM Audit",
          "steps": [
            "Conduct a mock IAM audit of your lab environment:",
            "Step 1: Create an audit scope document listing all identity systems and processes being audited",
            "Step 2: Prepare audit evidence packets for these controls:",
            "  - User provisioning/deprovisioning process",
            "  - Privileged access management",
            "  - Password/authentication policy",
            "  - Access review records",
            "  - Audit logging configuration",
            "Step 3: Conduct self-testing: try to find weaknesses in your own controls",
            "  Can you find an account that should have been disabled?",
            "  Are there any shared accounts?",
            "  Are audit logs for all systems being captured?",
            "Step 4: Write an audit findings report with: Finding ID, Title, Severity, Description, Evidence, Remediation Plan, Target Date",
            "Step 5: Create a remediation tracker and fix at least 2 findings",
            "This exercise teaches you both sides of the audit — critical for IAM leadership roles"
          ]
        },
        "resources": [
          {
            "label": "ISACA: IT Audit Framework",
            "url": "https://www.isaca.org/resources/it-audit"
          },
          {
            "label": "ServiceNow GRC",
            "url": "https://www.servicenow.com/products/governance-risk-and-compliance.html"
          },
          {
            "label": "Vanta: Automated Compliance",
            "url": "https://www.vanta.com/"
          }
        ],
        "quiz": [
          "Describe the 8 steps of a typical IAM audit lifecycle.",
          "List and explain the top 5 most common IAM audit findings.",
          "How do GRC tools relate to IAM operations?",
          "An auditor asks to see evidence of your access review process. What do you provide?",
          "You discover an orphaned admin account during your own self-audit. Document the finding and your remediation plan."
        ]
      },
      {
        "day": 5,
        "title": "Building Your Compliance & Governance Portfolio",
        "concepts": [
          {
            "heading": "IAM Governance Strategy",
            "body": "IAM governance is the oversight framework ensuring IAM operates effectively:\n\n• Policies: Written, approved, reviewed annually (Access Control Policy, Privileged Access Policy, etc.)\n• Standards: Specific technical requirements (password standards, MFA standards)\n• Processes: Documented workflows (JML, access reviews, exception management)\n• Metrics: KPIs measured and reported (access review completion rate, average provisioning time, orphaned account count)\n• Reporting: Regular reporting to management/board on IAM posture\n• Improvement: Continuous improvement based on audit findings, incidents, and industry evolution\n\nAn IAM professional who can design and run a governance program is an IAM leader, not just an implementer."
          },
          {
            "heading": "Week 11 Integration",
            "body": "You can now:\n• Map IAM controls to major compliance frameworks (SOX, HIPAA, GDPR, PCI-DSS, ISO 27001, NIST CSF)\n• Build and maintain an evidence library for audit readiness\n• Conduct Zero Trust maturity assessments\n• Prepare for and participate in IAM audits\n• Identify and remediate common audit findings\n• Design an IAM governance program\n\nThis compliance knowledge transforms you from a 'button-pusher' to a strategic IAM professional who can engage with auditors, legal, and executive leadership."
          }
        ],
        "lab": {
          "title": "Complete IAM Governance Package",
          "steps": [
            "Create a comprehensive IAM Governance Package for your portfolio:",
            "Document 1: IAM Policy (2-3 pages covering all key areas: access control, authentication, privileged access, third-party access, compliance)",
            "Document 2: Compliance Mapping Matrix (15+ controls × 6 frameworks)",
            "Document 3: Zero Trust Maturity Assessment with roadmap",
            "Document 4: Access Review Process with templates",
            "Document 5: IAM Metrics Dashboard (define 10 KPIs with targets)",
            "Package these professionally — this is interview-ready material",
            "Push all compliance documents to your GitHub portfolio",
            "Update your LinkedIn to highlight IAM governance and compliance experience"
          ]
        },
        "resources": [
          {
            "label": "NIST: Identity & Access Management Guidance",
            "url": "https://csrc.nist.gov/topics/security-and-privacy/identity-and-access-management"
          },
          {
            "label": "ISACA CISM Study Resources",
            "url": "https://www.isaca.org/credentialing/cism"
          }
        ],
        "quiz": [
          "What are the six components of an IAM governance program?",
          "Design an IAM metrics dashboard with 10 KPIs. For each, define what's measured and the target value.",
          "How does IAM governance differ from IAM operations?",
          "Why is compliance knowledge a career accelerator for IAM professionals?",
          "Present your IAM governance strategy in a 2-minute elevator pitch to a CISO."
        ]
      }
    ]
  },
  {
    "week": 12,
    "title": "Career Acceleration & Advanced Certifications",
    "theme": "Transform your IAM knowledge into career advancement — interviews, certifications, consulting, and leadership.",
    "days": [
      {
        "day": 1,
        "title": "Resume Engineering for IAM Roles",
        "concepts": [
          {
            "heading": "IAM Resume Anatomy",
            "body": "An IAM-focused resume must demonstrate both technical depth and business impact. Structure:\n\nHEADER: Name, title ('Identity & Access Management Engineer'), LinkedIn, GitHub, certifications\n\nSUMMARY (3 lines): 'IAM professional specialising in [Azure Entra ID / AWS IAM / multi-cloud identity]. Experience designing and implementing [RBAC models / Conditional Access / PIM / federation]. CompTIA Security+ certified with hands-on experience across [AD, Entra ID, AWS IAM, GCP IAM].'\n\nSKILLS (categorised):\n• Identity Platforms: Active Directory, Azure Entra ID, AWS IAM, GCP IAM, Okta\n• Protocols: SAML 2.0, OAuth 2.0, OIDC, SCIM 2.0, Kerberos, LDAP\n• Security: Conditional Access, PIM/PAM, Zero Trust, ITDR, MFA\n• Compliance: SOX, HIPAA, GDPR, PCI-DSS, ISO 27001, NIST CSF\n• Tools: PowerShell, Azure CLI, AWS CLI, Terraform, BloodHound\n• Governance: Access Reviews, JML Lifecycle, IGA, SoD\n\nEXPERIENCE: Use CAR format — Context, Action, Result. Quantify wherever possible."
          },
          {
            "heading": "Building Experience from Labs",
            "body": "Your lab work IS experience — frame it correctly:\n\nBAD: 'Set up Active Directory in VirtualBox'\nGOOD: 'Designed and implemented an Active Directory domain environment with tiered administration model, AGDLP group strategy, and CIS-benchmarked Group Policy baseline. Configured Azure AD Connect for hybrid identity synchronisation with Password Hash Sync.'\n\nBAD: 'Played with Conditional Access policies'\nGOOD: 'Designed and implemented a progressive Conditional Access policy framework including risk-based authentication, legacy auth blocking, device compliance enforcement, and named location policies. Configured PIM for just-in-time privileged access with approval workflows.'\n\nYour GitHub portfolio with documented labs, architecture diagrams, and compliance documents IS your evidence."
          },
          {
            "heading": "IAM Job Market Landscape (2026)",
            "body": "IAM roles and typical salary ranges (US market, 2026):\n\n• IAM Analyst / Junior IAM Engineer: $70K-$95K\n  Focus: Access provisioning, access reviews, helpdesk escalation, basic AD/Entra admin\n\n• IAM Engineer / Identity Engineer: $95K-$140K\n  Focus: Conditional Access, federation, automation, PAM implementation, IGA\n\n• Senior IAM Engineer / IAM Architect: $140K-$185K\n  Focus: Multi-cloud identity strategy, Zero Trust architecture, ITDR, program leadership\n\n• IAM Manager / Director: $160K-$220K+\n  Focus: Team leadership, vendor management, budget, compliance, executive reporting\n\n• IAM Consultant (independent): $150-$300/hour\n  Focus: Advisory, implementation, audit preparation, tool selection\n\nMulti-cloud expertise commands a 20-30% premium. ITDR expertise is the fastest-growing premium."
          }
        ],
        "lab": {
          "title": "Build Your IAM Resume",
          "steps": [
            "Create your IAM-focused resume using the structure above",
            "Write at least 6 bullet points for your lab experience, each in CAR format",
            "Include your certifications section: Security+ (obtained), SC-300 (in progress), etc.",
            "Include your GitHub portfolio link prominently",
            "Tailor a version for: IAM Engineer role at a mid-size company using Azure/M365",
            "Tailor a second version for: Cloud Security Engineer at a company using AWS + Azure",
            "Ask a peer or mentor to review your resume for clarity and impact",
            "Upload both versions to your documentation system"
          ]
        },
        "resources": [
          {
            "label": "LinkedIn IAM Job Search",
            "url": "https://www.linkedin.com/jobs/search/?keywords=identity%20access%20management"
          },
          {
            "label": "Glassdoor IAM Salary Data",
            "url": "https://www.glassdoor.com/Salaries/iam-engineer-salary-SRCH_KO0,12.htm"
          }
        ],
        "quiz": [
          "Write a 3-line resume summary for yourself targeting an IAM Engineer role.",
          "Convert one of your lab exercises into a CAR format resume bullet point.",
          "What IAM skills command the highest salary premium in 2026?",
          "How does your GitHub portfolio strengthen your resume?",
          "What is the difference between an IAM Engineer and an IAM Architect in terms of responsibilities?"
        ]
      },
      {
        "day": 2,
        "title": "Interview Mastery — Scenario-Based Questions",
        "concepts": [
          {
            "heading": "IAM Interview Format",
            "body": "IAM interviews typically include:\n\n1. Technical Screen (30 min): Basic IAM concepts, tool knowledge, scenario walk-throughs\n2. Technical Deep Dive (60 min): Detailed scenario problems, architecture design, troubleshooting\n3. Behavioural (45 min): Past experience, conflict resolution, communication with non-technical stakeholders\n4. Practical Exercise (60-90 min): Configure a Conditional Access policy, design an RBAC model, troubleshoot a federation issue\n\nKey insight: IAM interviews focus heavily on scenarios and 'what would you do' questions rather than pure memorisation. Your lab experience is your preparation."
          },
          {
            "heading": "Top 20 IAM Interview Questions with Model Answers",
            "body": "Q1: Walk me through how you would implement least privilege for a new application.\nModel: 'First, I'd identify the user personas and their required actions via stakeholder interviews. I'd design roles using RBAC, starting with read-only roles and adding write/admin only where justified. I'd implement using security groups, never direct user-to-permission assignments. I'd require business justification for elevated access, implement time-limited access via PIM for admin roles, and schedule quarterly access reviews. I'd also set up audit logging from day one and monitor for unused permissions using access analyzer tools.'\n\nQ2: Explain the difference between SAML and OIDC. When would you use each?\nModel: 'SAML is an XML-based federation protocol designed for enterprise SSO — it uses browser redirects and XML assertions. OIDC is an identity layer built on OAuth 2.0, using JSON/JWT tokens over REST APIs. I'd use SAML for enterprise SaaS integration where SAML is the established standard (Salesforce, ServiceNow). I'd use OIDC for modern apps, APIs, mobile apps, and custom development because it's lighter weight and better suited for REST architectures. Many apps now support both — OIDC is the direction the industry is moving.'"
          },
          {
            "heading": "Architecture Design Questions",
            "body": "Common design scenarios:\n\n'Design an IAM architecture for a company with 2,000 employees, hybrid infrastructure, and three cloud providers.'\n\nApproach:\n1. Start with the business: What industry? What compliance requirements? What applications?\n2. Identity source of truth: Azure AD (Entra ID) as central IdP, syncing from on-prem AD via Azure AD Connect\n3. Cloud federation: AWS IAM Identity Center via SAML, GCP Cloud Identity via OIDC\n4. Security controls: Conditional Access with risk-based policies, MFA for all users (phishing-resistant for admins), PIM for privileged roles\n5. Governance: Quarterly access reviews, JML process automated through HR integration, SoD policies enforced\n6. Monitoring: Sign-in logs centralised in Sentinel, ITDR with Defender for Identity, alerting on high-risk detections\n7. Compliance: Evidence library maintained, annual audit cycle, GRC tool integration\n\nAlways end with: 'And here's how I'd measure success: time-to-provision, access review completion rate, orphaned account count, mean time to detect identity threats.'"
          }
        ],
        "lab": {
          "title": "Interview Practice Session",
          "steps": [
            "Practice answering these scenario questions (write your answers, don't just think them):",
            "Scenario 1: 'A user reports they can't access SharePoint but can access email. Both use SSO. Troubleshoot.'",
            "Scenario 2: 'The CISO wants to implement Zero Trust in 6 months with a $200K budget. Present your plan.'",
            "Scenario 3: 'An admin account was compromised last night. Walk me through your response.'",
            "Scenario 4: 'We're migrating from on-prem AD to cloud-only. Design the migration approach.'",
            "Scenario 5: 'Design an IAM architecture for a healthcare company that is acquiring a fintech startup.'",
            "For each answer: time yourself (aim for 3-5 minutes per answer), use structured frameworks, and reference specific technologies",
            "Record yourself answering 2-3 questions and replay to identify filler words or unclear explanations",
            "Ask a friend or colleague to mock-interview you with these questions",
            "Create a personal 'Question Bank' with model answers for future reference"
          ]
        },
        "resources": [
          {
            "label": "Glassdoor: IAM Interview Questions",
            "url": "https://www.glassdoor.com/Interview/identity-and-access-management-interview-questions-SRCH_KO0,30.htm"
          },
          {
            "label": "Identity Management Institute",
            "url": "https://identitymanagementinstitute.org/"
          }
        ],
        "quiz": [
          "Answer: Walk me through implementing Conditional Access for a 500-person company.",
          "Answer: What are the biggest IAM security risks in a hybrid environment?",
          "Answer: How would you handle a situation where a VP insists on keeping admin access they don't need?",
          "Answer: Design an IAM architecture for a multi-cloud, multi-region company with 5,000 employees.",
          "What is the STAR/CAR framework and why is it effective for interview answers?"
        ]
      },
      {
        "day": 3,
        "title": "Advanced Certifications — SC-300, CISSP & Beyond",
        "concepts": [
          {
            "heading": "SC-300: Microsoft Identity & Access Administrator",
            "body": "SC-300 is THE Microsoft IAM certification. It validates:\n• Implementing identities in Azure AD (user management, external identities, hybrid identity)\n• Implementing authentication and access management (MFA, Conditional Access, Azure AD Identity Protection)\n• Implementing access management for applications (enterprise apps, app registrations, app consent)\n• Planning and implementing identity governance (access reviews, PIM, entitlement management)\n\nIf you've completed this course, you are well-prepared for SC-300. Study areas needing extra attention: Azure AD B2B/B2C, Entitlement Management, App Registration permissions model.\n\nExam: 40-60 questions, 120 minutes, passing score ~700/1000."
          },
          {
            "heading": "CISSP: Identity & Access Management Domain",
            "body": "CISSP is the gold standard security certification. Domain 5 covers IAM:\n• Physical and logical access control\n• Authentication and identification (factor types, SSO, federated identity)\n• Identity as a Service (IDaaS)\n• Third-party identity services\n• Access control attacks\n• Identity and access provisioning lifecycle\n\nCISSP requires 5 years of full-time security experience (or 4 years + relevant degree). The IAM content in CISSP is less deep than SC-300 but broader — it covers physical security, biometrics, and access control models at a conceptual level.\n\nThe CISSP + SC-300 combination signals both breadth and depth."
          },
          {
            "heading": "Other Valuable Certifications",
            "body": "• CIAM (Certified Identity & Access Manager): Identity-specific credential from the Identity Management Institute\n• AZ-500 (Azure Security Engineer): Broader Azure security including IAM\n• AWS Security Specialty: AWS security deep dive\n• Google Cloud Security Engineer: GCP security certification\n• CCSP (Certified Cloud Security Professional): Cloud security depth\n• CISA (Certified Information Systems Auditor): Valuable for IAM governance roles\n• CISM (Certified Information Security Manager): Management-level security certification\n\nStrategy: SC-300 first (immediate IAM relevance), then build toward CISSP (career capstone), add cloud certs based on your target employer's stack."
          }
        ],
        "lab": {
          "title": "Certification Preparation Plan",
          "steps": [
            "Create your personal certification roadmap with specific timelines:",
            "Immediate (within 3 months): SC-300 — Register for exam, identify study gaps, begin focused study",
            "SC-300 study plan: Review Microsoft Learn modules, take practice exams (MeasureUp, Whizlabs), focus on weak areas",
            "Short-term (3-9 months): AZ-500 or AWS Security Specialty (based on your target job market)",
            "Medium-term (9-18 months): Begin CISSP preparation (start logging your experience for the 5-year requirement)",
            "Create study schedules: Hours per week, topics per week, practice exam targets",
            "Budget: List exam costs and any paid study resource costs",
            "Join study communities: Reddit r/AzureCertification, Discord study groups, CISSP study forums",
            "Take an SC-300 practice exam with a timer — score yourself and identify your weak domains",
            "Document your study plan in your portfolio — it shows ambition and planning ability"
          ]
        },
        "resources": [
          {
            "label": "SC-300 Exam Info & Study Guide",
            "url": "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/"
          },
          {
            "label": "CISSP Official Study Guide",
            "url": "https://www.isc2.org/certifications/cissp"
          },
          {
            "label": "(ISC)² CISSP Free Self-Study",
            "url": "https://www.isc2.org/certifications/cissp/cissp-training-self-study"
          }
        ],
        "quiz": [
          "What are the four domains of the SC-300 exam?",
          "How does CISSP Domain 5 differ from the SC-300 in terms of IAM coverage?",
          "Design your personal 18-month certification roadmap with specific dates.",
          "What certification combination would make you most competitive for a Senior IAM Engineer role?",
          "How do you continue gaining knowledge after certifications — what's your continuous learning plan?"
        ]
      },
      {
        "day": 4,
        "title": "IAM Consulting & Freelance Path",
        "concepts": [
          {
            "heading": "IAM Consulting Opportunities",
            "body": "IAM consulting is one of the highest-paying specialisations in cybersecurity. Opportunities:\n\n• Implementation Projects: Deploy IAM solutions (Azure AD, Okta, SailPoint) for clients. Typical engagement: 3-12 months.\n• Advisory Services: Help clients design IAM strategies, select tools, build business cases. Typically senior-level.\n• Audit Preparation: Help organisations prepare for SOX, HIPAA, PCI-DSS audits — specifically the IAM controls.\n• Migration Projects: Help clients move from on-prem AD to cloud identity, or migrate between IdPs.\n• Incident Response: Specialised identity forensics and compromise remediation.\n\nConsulting rates (2026):\n• Junior IAM Consultant: $100-$150/hour\n• Mid-level IAM Consultant: $150-$250/hour\n• Senior IAM Architect/Advisor: $250-$400/hour\n• Through a consulting firm: You receive 40-60% of the billed rate"
          },
          {
            "heading": "Building a Consulting Practice",
            "body": "Steps to build an IAM consulting practice:\n\n1. Establish expertise: Certifications + portfolio (you're building this now)\n2. Choose your niche: Microsoft IAM, multi-cloud, IGA, PAM, compliance\n3. Build your network: LinkedIn presence, attendance at identity conferences (Identiverse, Gartner IAM Summit), local security meetups\n4. Start with part-time: Take consulting gigs alongside your full-time role (check your contract for non-compete clauses)\n5. Create content: Blog posts, LinkedIn articles, conference talks on IAM topics\n6. Join consulting platforms: Toptal, GLG, Expert360, or approach boutique security firms\n7. Build repeatable deliverables: Templates, assessment frameworks, playbooks you can customise per client\n8. Scale: Subcontract to other IAM professionals, build a practice"
          },
          {
            "heading": "The IAM Career Ladder",
            "body": "IAM career progression:\n\n• IAM Analyst (0-2 years): Execute provisioning, access reviews, respond to access requests. Learn the tools.\n• IAM Engineer (2-5 years): Design and implement solutions. Automate processes. Build integrations.\n• Senior IAM Engineer (5-8 years): Lead projects. Design architecture. Mentor juniors. Cross-platform expertise.\n• IAM Architect (8-12 years): Define strategy. Select technologies. Engage with executive stakeholders.\n• IAM Director / VP (10+ years): Lead teams. Own budget. Report to CISO. Drive organisational change.\n• CISO (15+ years): IAM background is one of the strongest paths to CISO — you understand the most critical security domain.\n\nAlternative paths: IAM Product Manager, IAM Vendor Engineer, Identity Standards Body Contributor, IAM Researcher"
          }
        ],
        "lab": {
          "title": "Career Development Plan",
          "steps": [
            "Create a comprehensive 5-year career development plan:",
            "Year 1: Target role, required skills, certification goals, networking plan",
            "Year 2-3: Advancement goals, leadership skills development, specialisation depth",
            "Year 4-5: Strategic goals (architect/director/consulting), speaking/writing, mentoring others",
            "Identify 10 companies you'd like to work for — research their IAM technology stack",
            "Identify 5 IAM leaders to follow on LinkedIn — engage with their content",
            "Write your first LinkedIn article about an IAM topic you've learned in this course",
            "Identify 3 upcoming security/identity conferences (virtual or in-person) and register for at least one",
            "Set up Google Alerts for: 'identity access management', 'Zero Trust', 'ITDR', 'IAM engineer job'"
          ]
        },
        "resources": [
          {
            "label": "Identiverse Conference",
            "url": "https://identiverse.com/"
          },
          {
            "label": "Gartner IAM Summit",
            "url": "https://www.gartner.com/en/conferences/na/identity-access-management-us"
          },
          {
            "label": "Identity Management Institute",
            "url": "https://identitymanagementinstitute.org/"
          }
        ],
        "quiz": [
          "What are the different levels of the IAM career ladder?",
          "What makes IAM consulting one of the highest-paid cybersecurity specialisations?",
          "Design your personal 5-year career plan with specific milestones.",
          "How can content creation (blogs, talks) accelerate your IAM career?",
          "Why is IAM experience considered one of the strongest paths to CISO?"
        ]
      },
      {
        "day": 5,
        "title": "Capstone — Your IAM Mastery Portfolio",
        "concepts": [
          {
            "heading": "The Capstone Project",
            "body": "Your capstone is the complete portfolio you've been building throughout this course. It demonstrates not just knowledge, but the ability to DESIGN, IMPLEMENT, DOCUMENT, and COMMUNICATE IAM solutions.\n\nYour portfolio should include:\n1. Technical Labs: Documented with screenshots, architecture diagrams, and explanations\n2. Architecture Designs: Multi-cloud IAM, Zero Trust, ITDR program, Kubernetes identity\n3. Compliance Deliverables: Compliance mapping matrix, access review templates, IAM governance package\n4. Code/Automation: PowerShell scripts, Terraform modules, policy-as-code examples\n5. Career Documents: Resume, certification roadmap, career development plan\n\nThis portfolio differentiates you from every other candidate who just lists certifications on their resume."
          },
          {
            "heading": "Course Completion Review",
            "body": "Over 12 weeks, you have built expertise across the full IAM landscape:\n\n• Week 1-2: AD Foundations, Entra ID, Hybrid Identity, PIM\n• Week 3: AWS IAM, Roles, Federation, SCPs\n• Week 4: SAML, OIDC, OAuth 2.0, SCIM 2.0 Federation\n• Week 5: IGA, PAM, Access Reviews, Entitlement Management\n• Week 6: Agentic AI Identity, Non-Human Identity, MCP Security\n• Week 7: Zero Trust Architecture, Capstone Project Start\n• Week 8: GCP IAM, Multi-Cloud Strategy, Workload Identity Federation\n• Week 9: Kubernetes RBAC, Pod Identity, SPIFFE/SPIRE, Service Mesh\n• Week 10: ITDR, Identity Protection, Forensics, Incident Response\n• Week 11: Compliance Frameworks, IAM Audits, Zero Trust Maturity\n• Week 12: Career Acceleration, Certifications, Consulting\n\nYou are now prepared for IAM roles that most professionals require 3-5 years to reach. Your depth across multi-cloud, containers, ITDR, compliance, and AI-era identity is genuinely future-proof."
          },
          {
            "heading": "What Comes Next",
            "body": "This course ends, but your IAM journey continues:\n\n1. Take SC-300 within 30 days while the knowledge is fresh\n2. Publish your portfolio to GitHub and share it on LinkedIn\n3. Apply for IAM Engineer / Identity Engineer roles\n4. Join the IAM community: Identiverse, IETF identity working groups, r/cybersecurity\n5. Stay current: Follow Gartner Hype Cycle for Identity, NIST publications, cloud provider release notes\n6. Give back: Mentor someone starting their security career\n\nYou chose to niche down — that's the smartest move in cybersecurity. IAM professionals are in critical demand because identity IS the security perimeter. You're ready."
          }
        ],
        "lab": {
          "title": "Final Portfolio Assembly & Publication",
          "steps": [
            "Review and polish your GitHub repository — ensure all documents are well-formatted and complete",
            "Create a professional README.md for your GitHub repo with: Course overview, your learning journey, key projects, technologies used",
            "Ensure all architecture diagrams are included and clearly labelled",
            "Review your lab documentation — add any missing screenshots or explanations",
            "Write a 'Lessons Learned' document: Top 10 things you learned, what surprised you, what you'd tell someone starting this journey",
            "Update your LinkedIn profile with: IAM-focused headline, updated skills, link to GitHub portfolio",
            "Write a LinkedIn post announcing your course completion and sharing one insight",
            "Register for the SC-300 exam",
            "Send a thank-you to anyone who helped you on this journey",
            "Celebrate — you've invested 12 weeks of serious effort into your career. That is exceptional."
          ]
        },
        "resources": [
          {
            "label": "SC-300 Exam Registration",
            "url": "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/"
          },
          {
            "label": "GitHub: Creating a Professional README",
            "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
          },
          {
            "label": "IAM Community Resources",
            "url": "https://identitymanagementinstitute.org/identity-management-resources/"
          }
        ],
        "quiz": [
          "What are the 5 categories your IAM portfolio should include?",
          "Summarise your 12-week IAM learning journey in 3 minutes (elevator pitch).",
          "What are your top 3 strongest IAM areas and your top 3 areas needing more depth?",
          "How will you stay current in the IAM field after this course ends?",
          "What advice would you give someone starting their IAM journey today?"
        ]
      }
    ]
  }
];
