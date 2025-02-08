const dateIdeas = {
    all: [
        "Watch a movie together online 🎬",
        "Cook the same recipe and video call while eating 🍝",
        "Write letters and open them on a call 💌",
        "Play an online multiplayer game together 🎮",
        "Take a virtual museum tour 🖼️",
        "Create a shared playlist and listen together 🎵",
        "Send a surprise gift 📦",
        "Plan a future trip together 🏝️"
    ],
    virtual: [
        "Watch a movie together online 🎬",
        "Cook the same recipe and video call while eating 🍝",
        "Take a virtual museum tour 🖼️",
        "Create a shared playlist and listen together 🎵"
    ],
    outdoor: [
        "Go on a synchronized walk while on a call 🚶",
        "Take pictures of your city and compare 📸",
        "Visit a local café and pretend you're together ☕",
        "Plan a stargazing session at the same time 🌠"
    ],
    creative: [
        "Write a poem for each other ✍️",
        "Make a DIY gift and send it 📦",
        "Draw each other and compare artworks 🎨",
        "Start a shared online journal 📖"
    ]
};

function generateDateIdea() {
    const category = document.getElementById("category").value;
    const ideas = category === "all" ? dateIdeas.all : dateIdeas[category];
    const randomIndex = Math.floor(Math.random() * ideas.length);
    document.getElementById("date-idea").innerText = ideas[randomIndex];
}
