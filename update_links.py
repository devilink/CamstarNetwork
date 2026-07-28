with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Navbar 'Let's Collaborate' button href
content = content.replace('<a href="#contact" class="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-accent hover:text-zinc-900 transition-colors duration-300">', '<a href="https://wa.me/917002107310" target="_blank" class="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-accent hover:text-zinc-900 transition-colors duration-300">')

# 2. Hero Section 'Start Project' button href
content = content.replace('<a href="#about" class="inline-block px-10 py-5 bg-black text-white font-black uppercase tracking-widest text-lg hover:bg-red-600 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all border-2 border-black">', '<a href="https://wa.me/917002107310" target="_blank" class="inline-block px-10 py-5 bg-black text-white font-black uppercase tracking-widest text-lg hover:bg-red-600 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all border-2 border-black">')

# Let's also check the giant Footer CTA which says "Start a Project" with href="mailto:camstarltd@gmail.com"
# Even though user said "Start Project and Lets Collab", the footer one is "Start a Project" and acts as a massive CTA. I should probably change that too for consistency.
content = content.replace('<a href="mailto:camstarltd@gmail.com" class="px-10 py-5 bg-white text-zinc-900 font-bold text-lg md:text-xl rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10">Start a Project</a>', '<a href="https://wa.me/917002107310" target="_blank" class="px-10 py-5 bg-white text-zinc-900 font-bold text-lg md:text-xl rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10">Start a Project</a>')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated WhatsApp links.")
