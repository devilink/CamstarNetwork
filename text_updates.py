with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Remove the "Campaign" pill
target_pill = '<div class="inline-block px-3 py-1 bg-red-900/20 text-red-500 text-xs font-bold tracking-widest uppercase rounded-full mb-3 md:mx-0 mx-auto w-max">Campaign</div>'
content = content.replace(target_pill, '')

# 2. Change "Profile Management" to "Personal Branding"
content = content.replace("Profile Management</h3>", "Personal Branding</h3>")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Updates applied successfully.")
