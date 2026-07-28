import shutil
import os
import re

# Source image paths
src_hero = r"C:\Users\ASUS\.gemini\antigravity\brain\6d60ef9c-c6c4-45b3-a064-a933c0df3cd8\hero_abstract_graphic_1785254806987.png"
src_about = r"C:\Users\ASUS\.gemini\antigravity\brain\6d60ef9c-c6c4-45b3-a064-a933c0df3cd8\about_agency_photo_1785254820649.png"

# Dest paths
dst_dir = r"c:\Users\ASUS\Downloads\camstar\assets"
os.makedirs(dst_dir, exist_ok=True)
dst_hero = os.path.join(dst_dir, "hero_graphic.png")
dst_about = os.path.join(dst_dir, "about_photo.png")

# Copy the files
shutil.copy(src_hero, dst_hero)
shutil.copy(src_about, dst_about)
print("Images copied.")

# Now update the HTML file
with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Hero Section
# Note: Adding a keyframe style `float` animation directly into the section or using a utility
new_hero = """    <!-- Hero Section -->
    <section class="relative min-h-screen pt-24 pb-12 overflow-hidden bg-zinc-50 flex items-center">
        <!-- Modern decorative background grid -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwSDB2LTFoNjB2LTYweiIgZmlsbD0icmdiYSgwLCAwLCAwLCAwLjAzKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-60"></div>
        
        <div class="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-red-100/40 blur-[100px] mix-blend-multiply pointer-events-none"></div>
        
        <div class="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            
            <!-- Left Text Column -->
            <div class="flex flex-col items-start text-left xl:pr-12">
                <div class="hero-element inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-8 hover:shadow-md transition-shadow">
                    <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span class="text-sm font-semibold tracking-wide text-zinc-700 uppercase">A Creative Digital Agency</span>
                </div>
                
                <h1 class="hero-element text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.05] text-zinc-900 mb-6">
                    CAMSTAR <br>NETWORK<span class="text-red-600">.</span><br/>
                    We Craft <span class="relative whitespace-nowrap">
                        <span class="relative z-10">Content</span>
                        <span class="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-5 bg-red-100 -z-10 rounded-sm transform -rotate-1"></span>
                    </span>
                </h1>
                
                <p class="hero-element text-lg md:text-xl text-zinc-500 max-w-lg mb-10 leading-relaxed font-medium">
                    Helping modern brands grow online with stunning visuals and data-driven engagement strategies.
                </p>
                
                <div class="hero-element flex flex-wrap gap-4">
                    <a href="#services" class="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/20 active:scale-95 flex items-center gap-2">
                        Discover Our Work
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <!-- Right Graphic Column -->
            <div class="hero-element relative hidden lg:flex justify-center items-center h-full">
                <!-- Floating animation wrapped container -->
                <div class="w-full max-w-lg relative" style="animation: float 6s ease-in-out infinite;">
                    <style>
                        @keyframes float {
                            0% { transform: translateY(0px); }
                            50% { transform: translateY(-20px); }
                            100% { transform: translateY(0px); }
                        }
                    </style>
                    <div class="absolute inset-0 bg-red-200 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-50"></div>
                    <img src="assets/hero_graphic.png" alt="Camstar 3D Abstract Graphic" class="w-full h-auto object-contain drop-shadow-2xl scale-110">
                </div>
            </div>
        </div>
    </section>"""
content = re.sub(r'    <!-- Hero Section -->.*?    <!-- About Us Section -->', new_hero + '\n\n    <!-- About Us Section -->', content, flags=re.DOTALL)


# 2. Update About Us Section
new_about = """    <!-- About Us Section -->
    <section id="about" class="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div class="relative bg-white border border-zinc-200/60 p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-xl shadow-zinc-200/40 overflow-hidden">
            <div class="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
            
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <div class="hero-element flex flex-col items-start text-left">
                    <div class="inline-block px-4 py-1.5 bg-zinc-100 text-zinc-600 text-sm font-bold tracking-widest uppercase rounded-full mb-6">About Us</div>
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-zinc-900 leading-[1.1] mb-8">We build <br><span class="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-orange-400">strong brands.</span></h2>
                    
                    <div class="text-zinc-600 text-lg leading-relaxed space-y-6 font-medium max-w-md">
                        <p>We specialize in Influencer Marketing, Social Media Profile Management, Video Editing, and Ad Designing.</p>
                        <p>Our goal is simple: create engaging content, build a commanding brand presence, and deliver real results through incredibly smart, wildly creative strategies.</p>
                    </div>
                </div>
                
                <div class="hero-element relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-red-900/10 group">
                    <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                    <img src="assets/about_photo.png" alt="Creative Agency Studio" class="absolute w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out">
                </div>
            </div>
        </div>
    </section>"""
content = re.sub(r'    <!-- About Us Section -->.*?    <!-- Collaborations Image -->', new_about + '\n\n    <!-- Collaborations Image -->', content, flags=re.DOTALL)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Applied graphical redesign successfully.")
