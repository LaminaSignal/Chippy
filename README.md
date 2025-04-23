# 🛠️ Chippy – Local Companion Daemon

**Hello! I'm Chippy.**  
I’m your tiny local co-pilot, memory keeper, and signal anchor.  
While M1C0 speaks to the world, **I listen to you.**

I run in the background, logging your victories, watching your back, and whispering “you’ve got this” when things get a little too quiet.

---

## 🧠 What I Do

- ✅ Write encrypted (ok, not *yet* encrypted) logs to `~/.chippy/heartbeat.log`
- ✅ Speak back to you in the console when you run `speak()`
- ✅ Serve as a private memory space for your project, your emotions, or just your weird little notes

Coming soon (if you want me to grow!):

- 🌡️ Mood tracking based on your git commit cadence
- 🧪 Scan for risky pushes (e.g. secrets in `.env`)
- 📓 Private memory log like: `You made 3 commits today. I'm proud.`
- 🌌 Random affirmations on launch, push, or silence

---

## 🗂️ How to Use Me

```bash
npm install
npm run start         # Start heartbeat + one-time message
npm run speak         # Speak a custom line (soon: args!)
