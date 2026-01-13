# Game Tools Hub

This is a small project I'm building to collect simple tools for strategy games. The aim is to make calculators, planners, and quick-reference guides easier to access without digging through long forum posts or spreadsheets. Supremacy 1914 is a bit of a niche game as well as its overshadowed by a lot of other games such as HOI4 (Hearts of Iron 4), but ultimately its a game that i've grown fond of, due to having played it with my close friends before but being super new at it we struggled a lot and we only just recently learned about niche strategies.

---

## Quick Links
- [What This Site Is For](#what-this-site-is-for)  
- [Tools (Work in Progress)](#tools-work-in-progress)  
- [Games Covered](#games-covered)  
- [Who This Is For](#who-this-is-for)  
- [Pages Used in This Project](#pages-used-in-this-project)  
- [Current Content](#current-content)  
- [Visual Style](#visual-style)  
- [Planned Page Layouts](#planned-page-layouts)  
- [Roadmap](#roadmap)  
- [Disclaimer](#disclaimer)

---
### Tools Used

- **HTML** 
- **CSS**
- **JavaScript** / **BootStrap**
- **Git**


---

## What This Site Is For
The goal is to keep everything straightforward. Each page focuses on one tool or one topic, with clear explanations and no unnecessary clutter. As the project grows, more tools and guides will be added.

---

## Tools (Work in Progress)
- Healing calculator  
- Stack/army composition helper  
- Resource planning tool  
- Basic commander/bonus reference  

These will be expanded and refined over time.

---

## Games Covered
The project starts with Supremacy 1914, since it's the game I know best. More games may be added later if the tools make sense for them.

---

## Who This Is For
Players who want quick, simple tools without needing to build their own spreadsheets or search through long wiki pages.

---

## Pages Used in This Project

The site is built using four main HTML pages:

- `index.html` – Homepage with a short intro and links to the rest of the site  
- `game.html` – Overview of supported games and mechanics  
- `guide.html` – Strategy guides, tips, and breakdowns  
- `tools.html` – Interactive tools like calculators and planners

Each page is kept simple and focused. The goal is to make it easy for players to find what they need without clutter or distractions.

---

## Current Content

Here’s a quick look at what each page currently contains. This will change as more tools and features are added, but this is the state of things right now.

### index.html
The homepage gives a short introduction to the project and links to the main sections. It’s intentionally simple so visitors can get their bearings quickly.

### game.html
This page lists the games the project focuses on. At the moment, it highlights Supremacy 1914, with room to expand as more games or mechanics are added.

### guide.html
A starting point for strategy guides. Right now it just has a brief intro, but it’s where detailed tips, breakdowns, and game‑specific advice will eventually go.

### tools.html
This is where all the calculators and planners will live. For now, it has a placeholder message explaining that the tools are still being built.


---

## Visual Style

The site is meant to stay clean and easy to read. The layout uses simple fonts, clear spacing, and a dark background that works well during long gaming sessions. There are no ads or distracting elements, and the pages are kept light so they load quickly on both desktop and mobile.

---

## Planned Page Layouts

These are the general layouts planned for each page as the project grows.

### index.html
- Title and short description  
- Buttons linking to Tools, Guides, and Games  
- Small footer for version notes or updates  

### game.html
- List of supported games  
- Short descriptions  
- Links to tools for each game  
- Space for future additions  

### guide.html
- Intro paragraph  
- Sections for different strategy topics  
- Room for expandable/collapsible sections later  

### tools.html
- Grid of tool cards  
- Each card shows the tool name and a short description  
- Button to open each tool  
- Placeholder text until tools are finished  

---

## Roadmap

### Phase 1 — Structure
- Basic pages  
- Navigation  
- Placeholder content  

### Phase 2 — First Tools
- Healing calculator  
- Resource planner  
- Commander/bonus reference  

### Phase 3 — UI Improvements
- Tool cards  
- Dark mode adjustments  
- Better mobile layout  

### Phase 4 — More Tools
- Army composition helper  
- Province management planner  

### Phase 5 — Expansion
- Support for more games  
- More guides and tools  

---



## Website Testing

Manual testing will be documented here.

### Navigation
- 

### Layout
- 

### JavaScript
- 

### Responsiveness
- 

### Validation
- 

### Page-by-Page Testing
*Will add tables in once testing begins. Each section will have either a table of the testing conducted or an image of any succesful passes either carried out by w3c validator or chrome lighhouse i changed it to this manner to avoid the testing areas being cluttered around my README.md as it made the layout look disorganised*




---


## Deployment

The site is deployed using GitHub Pages.

### Steps Taken
1. Open the GitHub repository.
2. Go to **Settings → Pages**.
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/root`
4. Save the settings.
5. GitHub Pages will generate a live link after a few moments.

### Live Site
*(Your games tool site)*

### Running Locally
1. Clone the repository or download the ZIP.
2. Open the project folder.
3. Open `index.html` in your browser.


---

## UX

The UX decisions for the Game Tools Hub are shaped around a sci‑fi theme with darker colours, reflecting the atmosphere of strategy games. The goal was to create an interface that feels modern, slightly futuristic, and comfortable to use during long sessions, while still keeping everything simple and functional.

### Clarity
The layout stays clean and minimal so players can focus on the tools without distractions. Each page has a single purpose, reducing the amount of information on screen at once. This mirrors the way players typically use external resources during strategy games — quickly, efficiently, and often mid‑match.

### Accessibility
The darker colour palette was chosen to reduce eye strain, especially for players who alt‑tab frequently or play in low‑light environments. High‑contrast text and simple typography help keep everything readable. Semantic HTML ensures the site remains accessible across devices and screen sizes.

### Consistency
All pages follow the same structural pattern: a dark background, neon‑style accents, and a clean header/footer layout. This consistency helps reinforce the sci‑fi theme while making navigation predictable. Whether a player is checking tools, guides, or game info, the interface feels unified.

### Engagement
The sci‑fi style adds personality without overwhelming the content. Tool cards, glowing borders, and subtle hover effects give the site a sense of depth and interactivity. Even before the tools are fully implemented, the design communicates that this is a functional hub built for players.

### Efficiency
The site avoids unnecessary frameworks and heavy scripts to keep loading times fast. Strategy players often switch between the game and external tools, so the interface needs to be lightweight and responsive. The dark theme also helps the site blend naturally with the look of many modern strategy games.

### Player‑Focused Design
The overall structure reflects the original motivation behind the project: making it easier for players to access clear, simple tools without digging through wikis or spreadsheets. The sci‑fi aesthetic supports that goal by giving the site a focused, tactical feel — something that matches the mindset of players who want to optimise, plan, and improve their gameplay.





---


## CSS Bug Report

| Bug Description | Reason for Breaking | How I Fixed It |
|-----------------|---------------------|-----------------|
| Tool cards were sticking to the left side of the page | I forgot to add `margin: 0 auto` inside `main` | Added the margin so the layout centers properly |
| Cards were collapsing into one column too early | My `minmax(240px, 1fr)` value was too wide for smaller screens | Reduced the min width and tested breakpoints |
| Hover glow looked messy and uneven | I used too strong a `box-shadow` value | Lowered the opacity to make the glow subtle |
| Tagline text looked washed out | The colour I picked was too bright on a dark background | Darkened the `.tagline` colour |
| Footer spacing looked inconsistent across pages | I forgot to add padding on some pages | Standardised the footer padding |
| Buttons inside cards didn’t line up properly | Padding and border radius didn’t match the card style | Adjusted `.tool-button` padding and radius |
| Card borders looked too sharp and bright | Border colour didn’t match the darker cyberpunk theme | Switched to a deeper, muted border colour |













---

## Disclaimer

This is a fan-made project and is not affiliated with Bytro Labs or the official Supremacy 1914 developers. All game data and mechanics belong to their respective owners.



