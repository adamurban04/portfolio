const thoughts = [
  { mood: "thinking", text: "I am Adam! I come from the Czech Republic and study in Ireland." },
  { mood: "happy", text: "Studying abroad gave me a lot of life experience." },
  { mood: "happy", text: "I enjoy all sports, but I love tennis the most." },
  { mood: "happy", text: "I love to travel and explore new cultures." },
  { mood: "happy", text: "I enjoy reading books, especially science fiction!" },
  { mood: "kiss", text: "Star Wars is my cup of tea." },   
  { mood: "thinking", text: "AI makes me really excited about the future." },     
  { mood: "happy", text: "Working on a summer research was a great experience." },
  { mood: "wink", text: "Click on me... I might change!" },
  { mood: "wink", text: "Did you check out the Contact page yet? You can send me a message there." },
  { mood: "thinking", text: "I wonder what I am working on now..." },
  { mood: "kiss", text: "I am really into music and enjoy playing the guitar." },
  { mood: "thinking", text: "My favourite programming language? HTML (joke)." },
  { mood: "happy", text: "Thanks for stopping by!" },
];

const container = document.querySelector('.ai-adam-container');
const basePath = container ? container.dataset.avatarPath : '/assets/avatar/';

function changeMood() {
  const bubble = document.getElementById("adam-bubble");
  const avatar = document.getElementById("adam-avatar");

  if (!bubble || !avatar) return;

  const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
  bubble.textContent = thought.text;
  avatar.src = basePath + `adam-${thought.mood}.jpg`;  // Make sure your images have .jpg extension
  console.log('Changing mood:', thought.mood, thought.text);
}

// Run immediately and repeat every 15 seconds
window.onload = () => {
  changeMood();

  const bubble = document.getElementById("adam-bubble");
  const avatar = document.getElementById("adam-avatar");

  if (bubble) bubble.addEventListener('click', changeMood);
  if (avatar) avatar.addEventListener('click', changeMood);
};
