// =============================================
//   POPUP MODAL - LEARNING CARDS
// =============================================

const cardDetails = {
    forex: {
        icon: "📈",
        title: "Forex Trading",
        body: `<p>Learn to analyze currency pairs and execute precise market entries.</p>
               <ul>
                   <li><strong>London & NY Sessions:</strong> Trade high-volatility windows.</li>
                   <li><strong>Price Action:</strong> Read market movement without lagging indicators.</li>
                   <li><strong>Risk Control:</strong> Protect capital on every position.</li>
               </ul>`
    },
    synthetic: {
        icon: "📊",
        title: "Synthetic Indices",
        body: `<p>Trade simulated markets available 24/7 without real-world news spikes.</p>
               <ul>
                   <li><strong>24/7 Markets:</strong> Trade Volatility 75, Step Index, and Boom/Crash anytime.</li>
                   <li><strong>Algorithm Patterns:</strong> Exploit repeatable structural movements.</li>
                   <li><strong>Proper Lot Sizing:</strong> Manage account growth safely.</li>
               </ul>`
    },
    smc: {
        icon: "📉",
        title: "Smart Money Concepts",
        body: `<p>Track institutional money flow and trade alongside market movers.</p>
               <ul>
                   <li><strong>Liquidity Sweeps:</strong> Identify retail stop runs before entries.</li>
                   <li><strong>Order Blocks:</strong> Find precise institutional entry points.</li>
                   <li><strong>Market Structure:</strong> Spot Break of Structure (BOS) and ChoCh.</li>
               </ul>`
    },
    psychology: {
        icon: "🧠",
        title: "Trader Psychology",
        body: `<p>Build the mental strength required for long-term trading success.</p>
               <ul>
                   <li><strong>Overcome FOMO:</strong> Wait patiently for high-probability setups.</li>
                   <li><strong>Accept Losses:</strong> View drawdowns as standard business expenses.</li>
                   <li><strong>Stay Calm:</strong> Execute your strategy without emotional stress.</li>
               </ul>`
    },
    discipline: {
        icon: "🛡️",
        title: "Discipline & Consistency",
        body: `<p>Consistency comes from sticking to a plan, not catching every market move.</p>
               <ul>
                   <li><strong>Trading Checklist:</strong> Never enter a trade without meeting your rules.</li>
                   <li><strong>Risk-to-Reward:</strong> Keep winners larger than losers mathematically.</li>
                   <li><strong>Trade Journaling:</strong> Review past setups to sharpen your edge.</li>
               </ul>`
    }
};

function openModal(cardKey) {
    const data = cardDetails[cardKey];
    if (data) {
        document.getElementById('modalIcon').innerText = data.icon;
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalBody').innerHTML = data.body;
        
        const modal = document.getElementById('infoModal');
        modal.classList.add('show');
    } else {
        console.log('Card not found:', cardKey);
    }
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

// =============================================
//   FAQ ACCORDION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".faq-question").forEach(function(question) {
        question.addEventListener("click", function() {
            const item = this.parentElement;
            const answer = item.querySelector(".faq-answer");

            document.querySelectorAll(".faq-item").forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    const otherAnswer = otherItem.querySelector(".faq-answer");
                    otherAnswer.style.maxHeight = null;
                }
            });

            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});

// =============================================
//   TERMS & CONDITIONS LANGUAGE SWITCHER
// =============================================

document.addEventListener("DOMContentLoaded", function () {
    const languageCards = document.querySelectorAll(".language-card");
    const englishTerms = document.getElementById("english");
    const hausaTerms = document.getElementById("hausa");
    const yorubaTerms = document.getElementById("yoruba");

    if (!languageCards.length || !englishTerms || !hausaTerms || !yorubaTerms) {
        return;
    }

    function showLanguage(language) {
        englishTerms.style.display = "none";
        hausaTerms.style.display = "none";
        yorubaTerms.style.display = "none";

        languageCards.forEach(function (card) {
            card.classList.remove("selected-language");
        });

        if (language === "english") {
            englishTerms.style.display = "block";
            const englishCard = document.querySelector('.language-card[href="#english"]');
            if (englishCard) englishCard.classList.add("selected-language");
        }

        if (language === "hausa") {
            hausaTerms.style.display = "block";
            const hausaCard = document.querySelector('.language-card[href="#hausa"]');
            if (hausaCard) hausaCard.classList.add("selected-language");
        }

        if (language === "yoruba") {
            yorubaTerms.style.display = "block";
            const yorubaCard = document.querySelector('.language-card[href="#yoruba"]');
            if (yorubaCard) yorubaCard.classList.add("selected-language");
        }
    }

    languageCards.forEach(function (card) {
        card.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("href");

            if (target === "#english") showLanguage("english");
            if (target === "#hausa") showLanguage("hausa");
            if (target === "#yoruba") showLanguage("yoruba");

            window.scrollTo({
                top: document.querySelector(".terms-language-section").offsetTop,
                behavior: "smooth"
            });
        });
    });

    showLanguage("english");
});

// =============================================
//   ANIMATED MOTIVATION QUOTES ROTATION
// =============================================

let quoteIndex = 0;
const quotes = document.querySelectorAll('.motivation-quote');

if (quotes.length > 0) {
    setInterval(() => {
        quotes.forEach(q => q.classList.remove('active'));
        quoteIndex = (quoteIndex + 1) % quotes.length;
        quotes[quoteIndex].classList.add('active');
    }, 6000);
}

// =============================================
//   HERO BOTTOM MOTIVATION QUOTES - ROTATING
// =============================================

const heroBottomQuotes = [
    '📚 "<span style="color: #16c784; font-weight: 600;">The market rewards those who study it</span>, <span style="color: #ffd700;">not those who gamble on it.</span>"',
    '⏳ "<span style="color: #16c784; font-weight: 600;">Patience is not about waiting</span>. <span style="color: #ffd700;">It\'s about waiting with purpose.</span>"',
    '🛡️ "<span style="color: #16c784; font-weight: 600;">Discipline is the bridge</span> <span style="color: #ffd700;">between your goals and your success.</span>"',
    '📈 "<span style="color: #16c784; font-weight: 600;">Price action is the language of the market</span>. <span style="color: #ffd700;">Learn to speak it fluently.</span>"',
    '💪 "<span style="color: #16c784; font-weight: 600;">Every loss is a lesson</span>. <span style="color: #ffd700;">Every lesson is a step forward.</span>"',
    '🎯 "<span style="color: #16c784; font-weight: 600;">The best investment you can make</span> <span style="color: #ffd700;">is in your trading education.</span>"',
    '🌊 "<span style="color: #16c784; font-weight: 600;">The trend is your friend</span>. <span style="color: #ffd700;">Respect it, and it will respect you.</span>"',
    '🔍 "<span style="color: #16c784; font-weight: 600;">Smart Money leaves footprints</span>. <span style="color: #ffd700;">Learn to follow them.</span>"',
    '💰 "<span style="color: #16c784; font-weight: 600;">The goal is not to make money</span>. <span style="color: #ffd700;">The goal is to protect it while it grows.</span>"',
    '🏆 "<span style="color: #16c784; font-weight: 600;">Trading is not about being right</span>. <span style="color: #ffd700;">It\'s about being profitable.</span>"'
];

let heroBottomIndex = 0;
const heroBottomElement = document.getElementById('heroBottomQuote');

if (heroBottomElement) {
    setInterval(() => {
        heroBottomElement.style.opacity = '0';
        setTimeout(() => {
            heroBottomIndex = (heroBottomIndex + 1) % heroBottomQuotes.length;
            heroBottomElement.innerHTML = heroBottomQuotes[heroBottomIndex];
            heroBottomElement.style.opacity = '1';
        }, 300);
    }, 3000);
}

// =============================================
//   TOGGLE MOBILE MENU
// =============================================

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('active');
}