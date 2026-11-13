/**
 * The tables of my Learning Environment Plan, as data.
 *
 * The plan is one document, but it is read in two places: whole, at
 * `/portfolio/clinical-practice/learning-environment-plan`, and a step at a time
 * inside the Module 4 activity that asked for it. Keeping the rows here, and the
 * prose in `src/components/lep/`, means both places show the same words.
 */
export interface Procedure {
  title: string;
  steps: string[];
  /** What the column beside the steps says, in the plan's own table. */
  supports?: string[];
  /** The online version, where one routine covers both settings. */
  online?: string;
  /** The group list splits its supports in two. */
  differences?: string;
  language?: string;
}

export const routinesInPerson: Procedure[] = [
  {
    "title": "Entry Routine: Log In and Start the Do Now",
    "steps": [
      "Greet the teacher at the door and walk straight to your assigned computer.",
      "Log in with your own school account. If someone else is still signed in, sign them out without opening their files.",
      "Open today’s project in Google Classroom and start the Do Now on the board (a short code-reading or debugging puzzle).",
      "When the timer ends, be ready to share your answer."
    ],
    "supports": [
      "Give a quiet, private reminder by pointing to the posted steps, have the student redo only the step that was missed, and thank them when it is done correctly (Kardamis, 2016).",
      "If several students miss the same step, reteach it to the whole class: introduce, discuss, model, and practice it again (The IRIS Center, 2021a).",
      "A card at the door lists the steps for late arrivals. With students who are often late, talk privately to understand the reason before deciding how to respond (The IRIS Center, 2021a).",
      "Keep a loaner laptop and a printed Do Now for login or device problems."
    ]
  },
  {
    "title": "Getting Help During Independent Coding",
    "steps": [
      "Read the error message and try to fix it on your own for 5 minutes.",
      "Check class resources (anchor charts, notes, worked examples) or ask a classmate.",
      "Add your name to the help queue on the board and keep working on another part of the project.",
      "Before the teacher arrives, close any tabs that show personal accounts or messages."
    ],
    "supports": [
      "Reteach how to read an error message with a worked example.",
      "Offer a private help channel for students who avoid asking in front of peers.",
      "For students who ask before trying, use a short “what I tried” checklist before conferencing.",
      "Provide a glossary of common error messages for English learners.",
      "If a student pastes a password or API key into their code, show them how to remove it and change the key, then practice the step again."
    ]
  },
  {
    "title": "End of Class: Save, Push, and Sign Out",
    "steps": [
      "At the 5-minute signal, save your work and push your code to GitHub Classroom.",
      "Complete the exit ticket (one thing you learned, one question you still have).",
      "Sign out of every account (Google, GitHub, coding platform), close the browser, and plug the laptop into the cart.",
      "Return to your seat and wait for the teacher to dismiss the class."
    ],
    "supports": [
      "Give an individual 7-minute warning to students who need more time to transition.",
      "If a student loses work, show them version history and autosave.",
      "A rotating “sign-out checker” scans the cart for signed-in screens and closes them without opening anything.",
      "If a student leaves accounts signed in more than once, practice the sign-out step with them during a break and add a checklist sticker to the laptop.",
      "Follow up privately with students who repeatedly skip the exit ticket."
    ]
  }
];

export const routinesOnline: Procedure[] = [
  {
    "title": "Entry Routine (Online)",
    "steps": [
      "Join from the link in Google Classroom 2–3 minutes early and check your camera and microphone.",
      "Set your display name to your first or preferred name only, and use a blurred or plain background if your camera is on.",
      "Answer the check-in question in the chat, then open the Do Now link pinned in the chat.",
      "Mute your microphone until the teacher invites you to speak."
    ],
    "supports": [
      "Students with weak connections may join by audio only or complete the check-in through a short form.",
      "Late joiners read the pinned chat to catch up. Students in another time zone complete an asynchronous version of the Do Now.",
      "If a display name shows a full name or personal details, rename it privately with host controls and send a reminder message.",
      "Address repeated issues in a private message, not in front of the class."
    ]
  },
  {
    "title": "Getting Help During Online Coding",
    "steps": [
      "Read the error message and try to fix it on your own for 5 minutes.",
      "Check the class question page in Google Classroom. If your question is not there, post it with your code snippet.",
      "Use the raise-hand tool or add your name to the shared help queue.",
      "Before sharing your screen, close personal tabs, email, and notifications."
    ],
    "supports": [
      "Offer private direct messages and short virtual office hours for students who will not ask in front of others.",
      "Post short screen-capture videos of common fixes.",
      "Reteach how to share a screen or paste code for students new to the platform.",
      "If private information appears on a shared screen or in the chat, stop the share, remove the message, and talk with the student privately. Use it as a teachable moment: chats are saved, so what is posted online lasts longer than something said in the room (Walton, 2020)."
    ]
  },
  {
    "title": "End of an Online Class",
    "steps": [
      "Push your code and submit the assignment link in Google Classroom.",
      "Complete the exit ticket form posted in the chat.",
      "Listen as the teacher summarizes next steps and where to find the recording.",
      "Leave the call when dismissed and sign out of class tools, especially on a shared family device."
    ],
    "supports": [
      "If a connection drops before submission, students may submit by the end of the day without penalty.",
      "Send an automatic reminder through Google Classroom to students who have not submitted.",
      "Give families who share a device a short sign-out checklist.",
      "Follow up individually with students who leave early more than once."
    ]
  }
];

export const privacyProcedures: Procedure[] = [
  {
    "title": "Routine: Monday Privacy Think-Aloud (the teacher models managing data)",
    "steps": [
      "I project a short, fictional example (an app’s permission screen, a sample public profile, or a code file with a password left in it) and think aloud about what I check and why.",
      "In pairs, students use our privacy checklist to find the risks and suggest a fix.",
      "We agree on one fix as a class, and I show how to make it on a demo account.",
      "I post the example and checklist in Google Classroom so students can review them later."
    ],
    "supports": [
      "Students who miss the lesson watch the captioned recording and complete the checklist.",
      "Students who prefer not to speak in front of the class can post answers in the chat or on a sticky note.",
      "Check in privately with students who seem disengaged and give them a role, such as checklist reader."
    ],
    "online": "I share my screen, students mark risks on a shared slide, and the captioned recording is posted afterward."
  },
  {
    "title": "Routine: Friday Data Check (students practice managing their personal data)",
    "steps": [
      "Open your data log (paper or digital, your choice) and list any new apps or sites that now hold your data.",
      "Check one privacy setting from this week’s card (for example, GitHub profile visibility, app permissions, or location sharing).",
      "Strengthen one password or turn on two-step verification where it is offered.",
      "Write one sentence about what you changed and the tradeoff between convenience and security."
    ],
    "supports": [
      "Students without personal accounts or devices practice on a sample account I provide.",
      "Students who skip the check complete it during the next Do Now.",
      "Pair unsure students with a “privacy buddy” who explains settings without ever seeing passwords.",
      "Provide a short glossary and a one-on-one walkthrough for students who need more support."
    ],
    "online": "The same four steps run as a 5-minute form at the start of Friday’s session. Any screenshots must crop out personal details."
  },
  {
    "title": "Procedures and expectations: personal data and digital identity",
    "steps": [
      "Use your school account for class tools. Ask before signing up for any new tool, and never use a personal email for class.",
      "Public work (GitHub repositories, project demos) shows only your first name or a chosen username: no full name, birthday, address, location, or photos of faces.",
      "Ask permission before posting a classmate’s name, image, voice, or code, and credit other people’s work.",
      "Before posting, ask: “Would I be comfortable if a university, employer, or family member saw this in five years?”"
    ],
    "supports": [
      "If a student posts personal information, help them remove it privately, including from the commit history, since Git keeps old versions.",
      "Hold a short restorative conversation when a post affects a classmate.",
      "Reteach the expectation by introducing, modeling, and practicing it again, and contact the family if it happens again."
    ],
    "online": "The same expectations apply, plus no recording or screenshots of classmates during calls."
  },
  {
    "title": "Procedure: Privacy by design in student coding projects",
    "steps": [
      "Use made-up sample data. Never use a classmate’s or family member’s real name, photo, or contact details.",
      "Keep passwords and API keys in a secrets file listed in .gitignore, never in the code you push.",
      "If your program collects information from users, collect only what it needs and show a short notice saying what is collected and why.",
      "Before publishing, have a partner review the project with the privacy checklist."
    ],
    "supports": [
      "Provide a starter template with the .gitignore file and sample data already set up.",
      "If a key is pushed by mistake, help the student remove it from the history and change it, with no penalty the first time.",
      "Offer a shorter checklist for students who need it."
    ],
    "online": "The same steps apply, and partner reviews happen through GitHub comments."
  },
  {
    "title": "Procedure: Suspicious messages, AI tools, and account problems",
    "steps": [
      "Do not type personal information (yours or anyone else’s) into AI chatbots or sites the class has not approved.",
      "If a message asks for your password or pushes you to click a link, do not respond. Report it with the class “Report it” form or tell the teacher.",
      "If you think someone else used your account, tell the teacher right away. We change the password and turn on two-step verification together, with no blame.",
      "Review the account’s recent sign-in activity together to see what happened."
    ],
    "supports": [
      "Students can report anonymously.",
      "Show examples of scam messages in several languages, since they reach students in every language.",
      "A student who clicks a scam link gets a private follow-up, never public correction."
    ],
    "online": "The report form is pinned in Google Classroom, and students can message me privately."
  },
  {
    "title": "Teacher procedures to ensure the privacy of student data",
    "steps": [
      "Use only tools the school has approved, including free click-through apps, after checking what data they collect. Share the list of class tools with families in plain language, translated when needed.",
      "Collect as little as possible: class repositories are private by default, grades and feedback stay in the learning management system, and real student data is never used in demo code or slides.",
      "Give each student their login details privately, lock my screen when I step away, keep student data off personal devices, and delete it at the end of the year according to school policy.",
      "Report any exposure of student data to school leadership the same day, and follow the school’s policy for informing families."
    ],
    "supports": [
      "If a student wants to use an unapproved app, offer an approved alternative or ask the school to review it.",
      "If a student shares a login, reset it right away and reteach why accounts are personal.",
      "If a student uses a classmate’s account, address it privately and connect it to our norm on protecting passwords."
    ],
    "online": "Unique meeting links and a waiting room admit only school accounts. Recordings are announced, stored in the school drive, shared only with the class, and deleted at the end of the term."
  }
];

export const designedForEveryStudent: string[] = [
  "Every routine can be completed on a school device and school account, so no student needs a personal phone, email, or home internet. Paper versions of the data log and checklists are always available.",
  "Checklists and setting cards use plain English, icons, and screenshots, work with screen readers and translation tools, and come with captioned videos.",
  "Cameras are optional online, and students choose their usernames and what they share about themselves, since expectations about privacy differ across families and cultures.",
  "Examples include apps and situations from many countries, not only one region.",
  "Students who need it get extra time, a shorter checklist, or a one-on-one walkthrough."
];

export const transitionsInPerson: Procedure[] = [
  {
    "title": "Entering the Classroom",
    "steps": [
      "Greet the teacher at the door and check the agenda posted on the screen.",
      "Go straight to your assigned computer and log in with your own school account.",
      "Open today's Do Now from the pinned post in Google Classroom.",
      "Start the Do Now before the 3-minute timer ends. The teacher takes attendance from it."
    ],
    "supports": [
      "Agenda shown with icons as well as words. Do Now written in short, plain-English sentences with key terms glossed, and a printed copy at the desk for students who need it. Students with anxiety or sensory needs may enter a minute early to settle before the room fills."
    ]
  },
  {
    "title": "Whole Group to Small Group",
    "steps": [
      "Give the attention signal and start a 2-minute countdown on the screen.",
      "Post group lists and roles (driver, navigator, reporter, timekeeper) on the board.",
      "One student repeats the steps aloud before the teacher says \"Move.\"",
      "Students save their work and move to their assigned table with only their laptops.",
      "Groups confirm roles and begin the posted task before the timer ends."
    ],
    "supports": [
      "Groups and roles are shown with names and icons and also read aloud. Role cards include sentence starters (\"I think we should try...\"). Groups are planned so a student still building English has a peer who can clarify in a shared language."
    ]
  },
  {
    "title": "Small Group to Whole Group",
    "steps": [
      "Give a 1-minute warning, then the attention signal (chime and \"laptops at 45\").",
      "Students finish their sentence, save their work, and half-close their laptops.",
      "Students return to their own seats.",
      "Each group's reporter gets ready to share one finding."
    ],
    "supports": [
      "A visible countdown helps students who find it hard to stop an absorbing task (Finley, 2017). Reporters may read from a sentence frame (\"Our group found...\"). A student with mobility needs can stay where they are while others move."
    ]
  },
  {
    "title": "Direct Instruction to Independent Coding (technology)",
    "steps": [
      "Post the task and success criteria, with screenshots, on the screen and in Google Classroom.",
      "Check understanding with a quick thumbs up, sideways, or down.",
      "Students open the starter code from Google Classroom and begin.",
      "The teacher checks in first with students who signaled sideways or down."
    ],
    "supports": [
      "Starter code includes commented hints that break the task into smaller steps. Written instructions work with translation tools and screen readers. Students with an IEP or 504 plan receive their chunked checklist or extra time as written in the plan."
    ]
  },
  {
    "title": "\"Lids Down\": Coding to Unplugged Discussion (technology)",
    "steps": [
      "Give the \"lids down\" signal with a 30-second countdown.",
      "Students save their work and close their laptops halfway.",
      "Students turn their chairs toward the speaker or discussion circle.",
      "Discussion begins once every screen is down."
    ],
    "supports": [
      "Students who hyperfocus on screens (common with ADHD or autism) get a quiet, private 2-minute heads-up first. Discussion questions are posted in writing, and a short think-pair-share lets English learners rehearse an answer before speaking to the whole class."
    ]
  },
  {
    "title": "Independent Coding to Pair Programming (technology)",
    "steps": [
      "Post partner pairs on the screen (planned using survey and progress data).",
      "Pairs sit at one computer: the driver at the keyboard, the navigator beside them.",
      "Start the visible role-swap timer (every 10 minutes).",
      "Pairs read the task together and agree on a plan before writing code."
    ],
    "supports": [
      "Partners are matched by coding experience and language background. Role cards list key phrases (\"Can you scroll up?\", \"Let's test it\") with space for home-language translations. Students who struggle with fine motor control can begin as navigator."
    ]
  },
  {
    "title": "Restroom and Water Breaks",
    "steps": [
      "Hold up the agreed hand signal and wait for the teacher's nod.",
      "Save your work and lock your screen.",
      "Sign out on the digital hall pass, take the physical pass, and leave quietly. One student goes at a time.",
      "Return quietly, sign back in on the hall pass, unlock your screen, and check the board for what changed."
    ],
    "supports": [
      "The hand signal means no student has to ask aloud, in English, in front of the class (Finley, 2017). Students whose IEP, 504, or health plan allows it leave without signaling. The pass has a picture as well as a word, and breaks are never discussed in front of peers."
    ]
  },
  {
    "title": "Leaving for and Returning from Pull-Out Support (EAL or Learning Support)",
    "steps": [
      "A timer alert reminds students 2 minutes before their scheduled support session.",
      "Students save their work, take their materials, and leave quietly without a class announcement.",
      "On return, students check the \"While You Were Out\" post in Google Classroom.",
      "A designated buddy gives a 1-minute catch-up, and the student joins the current task."
    ],
    "supports": [
      "The \"While You Were Out\" post uses short sentences and screenshots so it can be read quickly or translated. The buddy is a classmate the student is comfortable with, and the leaving is never announced, so no student is singled out."
    ]
  },
  {
    "title": "Switching to Plan B When the Network or a Tool Goes Down (technology)",
    "steps": [
      "The teacher says \"Plan B\" and shows the Plan B slide.",
      "Students save locally or take a screenshot of their code, then close their laptops.",
      "Table captains collect the printed Plan B packet (pseudocode, trace tables, or a debugging puzzle on paper).",
      "Students work in their current pairs until the teacher signals that devices are back."
    ],
    "supports": [
      "Plan B packets follow the same layout as online tasks, so the switch is familiar. Large-print and simplified versions are in the packet folder. Calm, predictable steps help students for whom an unexpected change is stressful."
    ]
  },
  {
    "title": "Getting Out and Returning Shared Equipment (robotics kits, microcontrollers, headphones)",
    "steps": [
      "Each group's materials manager collects the group's numbered kit.",
      "The group checks the contents against the photo checklist on the lid.",
      "At the 5-minute signal, students unplug, pack, and repeat the checklist.",
      "The materials manager returns the kit to its numbered shelf before the timer ends."
    ],
    "supports": [
      "Photo checklists mean the kit can be checked without reading English. The materials manager role rotates and is a good first leadership role for a student who struggles with transitions (Brukner, 2021). Students with fine motor needs receive pre-sorted kits."
    ]
  },
  {
    "title": "Fire Drill or Emergency Evacuation",
    "steps": [
      "At the alarm, stop, close laptops, and leave everything on the desk.",
      "Line up at the door in the posted order, with your buddy.",
      "Walk silently to the assembly point and stand with the class for the roll call.",
      "On return, log back in and check the pinned post for where we left off."
    ],
    "supports": [
      "Drills are practiced in the first week with a visual route map. Students with sensory sensitivities are warned before scheduled drills and may wear headphones. Newer students and English learners are paired with a buddy, and students with mobility needs follow their individual evacuation plan."
    ]
  },
  {
    "title": "Exiting the Classroom",
    "steps": [
      "At the 5-minute signal, save your work and push your code to GitHub Classroom.",
      "Complete the exit ticket.",
      "Sign out of every account, close the browser, and plug the laptop into the cart.",
      "Return to your seat and wait for the teacher to dismiss the class."
    ],
    "supports": [
      "Students who need more time get a private 7-minute warning. The exit ticket can be answered with a sentence frame or a quick drawing or code snippet. A checklist sticker on each laptop shows the sign-out steps with icons."
    ]
  }
];

export const transitionsOnline: Procedure[] = [
  {
    "title": "Entering the Online Class",
    "steps": [
      "Join from the Google Classroom link 2–3 minutes early and wait in the waiting room.",
      "Check your camera and microphone, and set your display name to your preferred first name.",
      "Answer the check-in question in the chat.",
      "Open the Do Now link pinned in the chat and begin."
    ],
    "supports": [
      "Live captions are turned on for the whole session. Students with weak connections may join by audio only and answer the check-in with a short form. The Do Now link is posted in the chat and in Google Classroom, so students who join late can find it."
    ]
  },
  {
    "title": "Whole Group to Breakout Rooms",
    "steps": [
      "Post the task, roles, and time limit in the chat and on a shared slide before opening rooms.",
      "Open breakout rooms with a visible countdown timer.",
      "Groups assign roles and open the shared document or editor linked in the chat.",
      "The teacher visits each room within the first 3 minutes."
    ],
    "supports": [
      "Instructions are pinned in writing because spoken directions are easy to miss online. English learners are placed with a peer who can clarify in a shared language. Students who find breakout rooms stressful may choose the \"chat-only\" reporter role."
    ]
  },
  {
    "title": "Breakout Rooms to Main Room",
    "steps": [
      "Broadcast a 2-minute warning to all rooms.",
      "Groups save their work to the shared class folder.",
      "Rooms close automatically and students return to the main room.",
      "Reporters use the raise-hand tool and unmute one at a time to share."
    ],
    "supports": [
      "Reporters may type their summary in the chat instead of speaking. The shared folder means no student loses work if their connection drops during the move."
    ]
  },
  {
    "title": "Direct Instruction to Independent Coding (technology)",
    "steps": [
      "The teacher stops screen sharing and posts the task link and success criteria in the chat.",
      "Students react with a thumbs-up once their editor is open.",
      "Students code with microphones muted and cameras optional.",
      "The teacher stays in the main room to answer the help queue."
    ],
    "supports": [
      "A short captioned screen recording of the demo is posted so students can rewatch it at their own pace. Students can ask for help privately by direct message."
    ]
  },
  {
    "title": "Coding to Whole-Class Discussion",
    "steps": [
      "Post a 1-minute warning in the chat.",
      "Students save their work and close other tabs.",
      "Students turn cameras on (per our class agreement) and focus on the shared screen.",
      "Students take turns using the raise-hand tool or the chat."
    ],
    "supports": [
      "Students can answer aloud, in the chat, or on an anonymous Pear Deck slide. Questions stay on screen in writing, and students get 30 seconds of think time before anyone answers."
    ]
  },
  {
    "title": "Independent Coding to Online Pair Programming (technology)",
    "steps": [
      "Post partner pairs and breakout room numbers in the chat.",
      "The driver opens the shared live-coding editor so both partners can see and edit the code.",
      "Pairs set a role-swap timer.",
      "Pairs post their plan in one chat message before they start coding."
    ],
    "supports": [
      "Partners are matched by experience and language background. The shared editor's comments let partners communicate in writing as well as speech, which helps students still building spoken English."
    ]
  },
  {
    "title": "Switching Between Online Tools (slides, Pear Deck, code editor) (technology)",
    "steps": [
      "The teacher names the next tool and posts its link in the chat.",
      "Students open the link and react with a thumbs-up when it has loaded.",
      "Students close the previous tab so only class tools are open.",
      "The activity starts once most students have reacted. The teacher helps anyone still loading by direct message."
    ],
    "supports": [
      "All links also sit on one class hub page in the same order as the agenda, so a student who falls behind can always find the current activity. Changing tools every 10 to 15 minutes keeps the session active for students who struggle to sustain attention in front of a screen."
    ]
  },
  {
    "title": "Short Breaks and Stepping Away Online",
    "steps": [
      "Post \"brb\" in the chat or use the \"away\" reaction.",
      "Turn your camera off and mute your microphone.",
      "When you return, post \"back\" and check the pinned chat for the current task."
    ],
    "supports": [
      "No one has to explain why they are stepping away. The teacher builds a whole-class movement break into every 25 minutes of screen time, which helps students with attention needs (Brukner, 2021)."
    ]
  },
  {
    "title": "Rejoining After a Dropped Connection or Late Arrival",
    "steps": [
      "Rejoin with the class link without interrupting. The teacher will check in.",
      "Read the pinned chat for the current task and time stamps.",
      "Message your connection buddy privately for a quick catch-up.",
      "If you cannot rejoin, watch the recording and complete the asynchronous version by the posted deadline."
    ],
    "supports": [
      "Students who rely on mobile data or share a device are never penalized for a dropped connection. The recording has captions, and the asynchronous version uses the same steps as the live lesson."
    ]
  },
  {
    "title": "Leaving the Online Class",
    "steps": [
      "Push your code and submit the assignment link in Google Classroom.",
      "Complete the exit ticket form posted in the chat.",
      "Listen as the teacher summarizes next steps and where to find the recording.",
      "Leave the call when dismissed and sign out of class tools, especially on a shared family device."
    ],
    "supports": [
      "The next steps are posted in writing as well as spoken. Families who share a device receive a short sign-out checklist with icons."
    ]
  }
];

export const groupTransitionsInPerson: Procedure[] = [
  {
    "title": "Entering the classroom",
    "steps": [
      "Greet students at the door by name.",
      "Students check the agenda and Do Now posted on the board or screen.",
      "Students go to their seats, take out materials, and start the Do Now.",
      "A 3-minute timer runs; the teacher takes attendance while students work."
    ],
    "differences": "Visual agenda with icons; a printed step card on the desk; students with anxiety or sensory needs may enter early.",
    "language": "Agenda and Do Now in short, plain-English sentences with key words glossed; greeting uses the student's preferred name and pronunciation."
  },
  {
    "title": "Exiting the classroom",
    "steps": [
      "At the 5-minute signal, students save work and complete the exit ticket.",
      "Students return shared materials and devices and tidy their area.",
      "Students stay seated until the teacher dismisses the class, not the bell."
    ],
    "differences": "A private 2-minute warning for students who need more time; a checklist taped to each desk.",
    "language": "Exit ticket can be answered with a sentence frame, a drawing, or a home-language word; homework posted in writing as well as said aloud."
  },
  {
    "title": "Restroom: asking permission, leaving, and returning",
    "steps": [
      "Students use the agreed hand signal; the teacher nods or holds up a finger for \"wait.\"",
      "Students save or mark their place and take the pass. One student leaves at a time.",
      "Students sign out on the log (time out) and leave quietly.",
      "On return, students sign back in, return the pass, and check the board for what changed."
    ],
    "differences": "Students with an IEP, 504, or health plan leave without signaling; the request is never discussed in front of peers.",
    "language": "The hand signal and a picture pass mean no one has to ask aloud in English (Finley, 2017)."
  },
  {
    "title": "Whole class to small groups",
    "steps": [
      "Give the attention signal and start a visible 2-minute timer.",
      "Post group lists and roles on the screen.",
      "One student repeats the steps aloud before the teacher says \"Move.\"",
      "Groups move with only what they need and start the posted task before the timer ends."
    ],
    "differences": "Precorrection and a visible timer make the move predictable; students who struggle most with transitions take a leadership role such as timekeeper (Brukner, 2021).",
    "language": "Groups and roles shown with names and icons and read aloud; role cards with sentence starters; a peer who shares a language in each group where possible."
  },
  {
    "title": "Small groups back to whole class",
    "steps": [
      "Give a 1-minute warning, then the attention signal.",
      "Students finish their sentence and save or put away their work.",
      "Students return to their seats.",
      "Each group's reporter gets ready to share one idea."
    ],
    "differences": "The countdown helps students who find it hard to stop an absorbing task; students with mobility needs may stay in place.",
    "language": "Reporters may read from a sentence frame (\"Our group found...\") or show a written answer."
  },
  {
    "title": "Direct instruction to independent work",
    "steps": [
      "Post the task and success criteria on the board.",
      "Quick check for understanding (thumbs up, sideways, down).",
      "Students begin; the teacher checks in first with students who signaled sideways or down."
    ],
    "differences": "Tasks broken into a numbered checklist; extra time or a reduced task as written in IEPs and 504 plans.",
    "language": "Instructions shown and spoken, with a worked example; key vocabulary on the word wall."
  },
  {
    "title": "Switching activities within a lesson",
    "steps": [
      "Give the transition cue and a 30-second countdown.",
      "Students put away materials from the first activity.",
      "Students take out what the next activity needs, shown on the board.",
      "Students start the next activity when the timer ends."
    ],
    "differences": "The lesson agenda stays on the board so students can see what is next; a collective deep breath after an active task (Brukner, 2021).",
    "language": "The cue is a sound and a gesture, not just words; a picture of the needed materials is on the board."
  },
  {
    "title": "Getting out and putting away devices (technology)",
    "steps": [
      "Device managers bring the cart to each table group.",
      "Students take the device numbered for their seat, log in, and open the posted link.",
      "At the \"lids down\" signal, students save, sign out, and close the lid.",
      "Devices go back into numbered slots and are plugged in; managers check the cart."
    ],
    "differences": "Students who hyperfocus on screens get a private heads-up before \"lids down\"; pictorial login steps at each table.",
    "language": "Login steps shown with screenshots; links posted, not read aloud, so they can be translated."
  },
  {
    "title": "Rotating through stations",
    "steps": [
      "Post the rotation chart and play a signal at each change.",
      "Students tidy the station and leave it ready for the next group.",
      "Groups move clockwise to the next station.",
      "Groups read the station card and start."
    ],
    "differences": "Station cards with numbered steps and visuals; a calm station for students who need a break from noise.",
    "language": "Station cards include images and key words in English with translations added by students."
  },
  {
    "title": "Setting up and cleaning up hands-on or lab materials",
    "steps": [
      "Materials managers collect each group's labeled kit.",
      "Groups check contents against the photo checklist.",
      "At the cleanup signal, groups pack the kit and repeat the checklist.",
      "Managers return kits to the shelf before the timer ends."
    ],
    "differences": "Pre-sorted kits for students with fine motor needs; the manager role rotates and builds confidence.",
    "language": "Photo checklists so kits can be checked without reading English."
  },
  {
    "title": "Leaving for and returning from pull-out support",
    "steps": [
      "A private timer or card reminds the student 2 minutes before their session.",
      "The student saves work and leaves quietly without an announcement.",
      "On return, the student checks the \"While You Were Out\" folder or post.",
      "A buddy gives a 1-minute catch-up, and the student joins the task."
    ],
    "differences": "Leaving is never announced, so no student is singled out.",
    "language": "The catch-up note uses short sentences and visuals so it can be read quickly or translated."
  },
  {
    "title": "Late arrival",
    "steps": [
      "The student enters quietly and hands any pass to the teacher without stopping class.",
      "The student checks the board for the current task.",
      "A table buddy quietly points to the place in the task.",
      "The teacher checks in privately when there is a pause."
    ],
    "differences": "The reason for lateness is discussed privately and later, since it may be outside the student's control.",
    "language": "The current task is always written on the board, so the student does not have to ask aloud."
  },
  {
    "title": "Fire drill or emergency evacuation",
    "steps": [
      "At the alarm, students stop, leave everything, and line up in the posted order.",
      "Students walk silently with their buddy to the assembly point.",
      "Students stand with the class for roll call.",
      "On return, students check the board for where the lesson left off."
    ],
    "differences": "Drills practiced in the first week; students with sensory needs warned before scheduled drills and allowed headphones; individual evacuation plans followed.",
    "language": "A visual route map by the door; newcomers and English learners paired with a buddy."
  }
];

export const groupTransitionsOnline: Procedure[] = [
  {
    "title": "Joining the live class",
    "steps": [
      "Students join from the class link 2–3 minutes early and wait in the waiting room.",
      "Students set their display name to their preferred first name and check audio.",
      "Students answer the check-in question in the chat and open the Do Now link."
    ],
    "differences": "Cameras are optional for students with anxiety, and a visual schedule for the session is pinned in the chat.",
    "language": "Live captions on; the Do Now link and instructions pinned in the chat."
  },
  {
    "title": "Whole class to breakout rooms",
    "steps": [
      "Post the task, roles, and time limit in the chat and on a slide before opening rooms.",
      "Open rooms with a visible countdown timer.",
      "Groups assign roles and open the shared document.",
      "The teacher visits each room within the first 3 minutes."
    ],
    "differences": "Students who find breakout rooms stressful can take a chat-only role.",
    "language": "Written instructions pinned, since spoken directions are easy to miss online; a peer who shares a language where possible."
  },
  {
    "title": "Breakout rooms back to the main room",
    "steps": [
      "Broadcast a 2-minute warning to all rooms.",
      "Groups save work to the shared folder.",
      "Rooms close and students return to the main room.",
      "Reporters use the raise-hand tool to share."
    ],
    "differences": "The 2-minute warning and a timer in each room give students time to finish a thought before the move.",
    "language": "Reporters may type their summary in the chat instead of speaking."
  },
  {
    "title": "Instruction to independent work",
    "steps": [
      "The teacher stops screen sharing and posts the task link and success criteria.",
      "Students react with a thumbs-up when the task is open.",
      "Students work with microphones muted; the teacher stays in the main room for questions."
    ],
    "differences": "A captioned recording of the instruction is posted to rewatch at any pace.",
    "language": "Students can ask questions privately by direct message, in writing."
  },
  {
    "title": "Switching between online tools (technology)",
    "steps": [
      "The teacher names the next tool and posts its link in the chat.",
      "Students open it and react with a thumbs-up when it has loaded.",
      "Students close the previous tab.",
      "The activity starts when most students are ready; the teacher helps the rest privately."
    ],
    "differences": "All links sit on one class hub page in agenda order, so students who fall behind can find their place.",
    "language": "Links are clickable, not read aloud, and pages work with translation tools."
  },
  {
    "title": "Moving into a poll, quiz, or shared whiteboard",
    "steps": [
      "The teacher announces the activity and posts the link or launches the poll.",
      "Students respond within the visible time limit.",
      "The teacher shares results and asks one or two students to explain."
    ],
    "differences": "Anonymous responses lower anxiety; extra time is allowed for students who need it.",
    "language": "Students can answer with images, emoji, or short words, and get 30 seconds of think time before anyone explains."
  },
  {
    "title": "Short breaks and stepping away",
    "steps": [
      "Students post \"brb\" or use the away reaction.",
      "Students turn off their camera and mute.",
      "On return, students post \"back\" and check the pinned chat for the current task."
    ],
    "differences": "No one has to explain why they are stepping away; whole-class movement break every 25 minutes.",
    "language": "\"brb\" and \"back\" are taught as class words on day one."
  },
  {
    "title": "Dropped connection or late arrival",
    "steps": [
      "Students rejoin with the class link without interrupting.",
      "Students read the pinned chat for the current task.",
      "Students message their buddy privately for a quick catch-up.",
      "If they cannot rejoin, they watch the recording and complete the asynchronous version."
    ],
    "differences": "No penalty for connection problems; the asynchronous version uses the same steps as the live lesson.",
    "language": "The recording has captions, and the pinned chat keeps written time stamps."
  },
  {
    "title": "Leaving the live class",
    "steps": [
      "Students submit work and complete the exit ticket form.",
      "The teacher summarizes next steps and where to find the recording.",
      "Students leave when dismissed and sign out, especially on shared family devices."
    ],
    "differences": "Next steps are posted in writing as well as spoken.",
    "language": "A sign-out checklist with icons for families who share a device."
  }
];

export const needsAndBehaviors: { need: string; behaviors: string; supports: string }[] = [
  {
    "need": "Physiological",
    "behaviors": "Head down or dozing, often after a long-haul flight home, a late night, or a long commute; irritable or unfocused before lunch; restless after a long stretch at the screen; frequent requests to leave the room; covering ears or drifting off in a noisy lab. Hunger and tiredness make it harder for students to concentrate and cooperate, and a loud, busy room can overstimulate some students (Hamilton, 2020).",
    "supports": "Allow water bottles and keep a discreet snack basket. Build in a screen and movement break every 20–25 minutes, and offer a quiet corner or headphones during independent coding. Check in privately instead of correcting publicly, and bring in the nurse, counselor, or learning-support team if a pattern continues, because an underlying medical or learning need can look like misbehavior (Hamilton, 2020). A student who is very hungry struggles to think about anything else (Hopper, 2020), and McLeod (2026) lists food, water, restroom breaks, and movement as the classroom supports for this level."
  },
  {
    "need": "Safety",
    "behaviors": "Will not share their screen or code; never asks a question; freezes during live coding or presentations; withdraws after a conflict; worries about what happens to their data online. Other students test limits to find out what is allowed, or repeat a behavior because it once got them out of work (Hamilton, 2020).",
    "supports": "A posted agenda and the same routines every day; a private help channel; clear expectations applied the same way to everyone, so misbehavior never earns a shortened task (Hamilton, 2020); norms that treat errors as a normal part of coding; and clear digital safety rules, including no recording or sharing classmates without consent. Children need safe, predictable surroundings and often react with fear or anxiety without them (Hopper, 2020), and McLeod (2026) names clear expectations, bullying prevention, and consistent, fair treatment as the classroom supports for this level."
  },
  {
    "need": "Love and Belonging",
    "behaviors": "Works alone or seems isolated; a student who arrived mid-year struggles to join a group; clowning or calling out to get attention, even negative attention; off-task chatting; ignores requests from a teacher they have no real connection with (Hamilton, 2020).",
    "supports": "Greet every student at the door by their preferred name; structured pair programming with rotating partners; a buddy for new arrivals; projects built around interests from the background survey; and co-created class norms. Notice and name positive choices instead of giving airtime to attention-seeking (Hamilton, 2020). Belonging includes being accepted by friends and groups (Cherry, 2026), feeling left out harms well-being (Hopper, 2020), and McLeod (2026) recommends group projects, learning students' names, and valuing diversity."
  },
  {
    "need": "Esteem",
    "behaviors": "Says \"I'm not a computer person\"; gives up after the first error message; copies code without understanding it; hides confusion by disrupting when work is too hard; lashes out instead of asking for help; refuses directions or tries to take over a group to gain control (Hamilton, 2020); perfectionism.",
    "supports": "Specific praise for effort and debugging strategies; showcase student work; give students expert roles and real choices so they gain influence in a positive way; teach the words for asking for help and joining a group; track growth in project portfolios; and offer scaffolded challenge levels. Students whose esteem needs go unmet can develop feelings of inferiority (Cherry, 2026), and McLeod (2026) recommends recognizing strengths, displaying work, and praising effort."
  },
  {
    "need": "Self-Actualization",
    "behaviors": "Finishes early and asks for more; bored and restless when tasks are too easy (Hamilton, 2020); builds personal coding projects outside class; wants to lead or mentor others.",
    "supports": "Choice-based extension projects; open-ended challenges and competitions; peer-mentor and tech-lead roles; projects that solve real problems in the school or community; and independent study. Self-actualization means growing toward one's full potential, and it looks different for each person (Cherry, 2026; Hopper, 2020), so these options stay open-ended. McLeod (2026) suggests passion projects, goal-setting, and enrichment for this level."
  }
];

