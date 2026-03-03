class MhwwWellbeing extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<style>
@font-face { font-family:'TTCommons'; src:url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight:600; }
        @font-face { font-family:'TTCommons'; src:url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight:300; }
        @font-face { font-family:'TTCommons'; src:url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight:500; }

        :root {
            --primary-teal: #4a9b94;
            --soft-sage: #7ba89f;
            --text-primary: #2d5a5a;
            --text-light: #6b8585;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'TTCommons', sans-serif;
            background: transparent;
            padding: 0;
        }

        .wellbeing-section {
            max-width: 100%;
            margin: 0 auto;
            background: transparent;
            padding: 0;
        }

        .activities-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px 50px;
        }

        .activity-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
            margin-bottom: 50px;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards;
        }

        .activity-card:nth-child(1) { animation-delay: 0.1s; }
        .activity-card:nth-child(2) { animation-delay: 0.2s; }
        .activity-card:nth-child(3) { animation-delay: 0.3s; }

        .activity-card:nth-child(even) .activity-image { order: 2; }
        .activity-card:nth-child(even) .activity-content { order: 1; }

        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }

        .activity-image {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(74, 155, 148, 0.15);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .activity-image:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(74, 155, 148, 0.25);
        }

        .activity-image img {
            width: 100%;
            height: 320px;
            object-fit: cover;
            display: block;
        }

        .activity-card:nth-child(1) .activity-image::after {
            content: ''; position: absolute; inset: 0;
            background: linear-gradient(135deg, rgba(232, 159, 126, 0.15), transparent);
            pointer-events: none;
        }
        .activity-card:nth-child(2) .activity-image::after {
            content: ''; position: absolute; inset: 0;
            background: linear-gradient(135deg, rgba(74, 155, 148, 0.15), transparent);
            pointer-events: none;
        }
        .activity-card:nth-child(3) .activity-image::after {
            content: ''; position: absolute; inset: 0;
            background: linear-gradient(135deg, rgba(179, 157, 189, 0.15), transparent);
            pointer-events: none;
        }

        .activity-content { padding: 10px; }

        .activity-title {
            font-family: 'TTCommons', sans-serif;
            font-size: 26px;
            line-height: 1.2;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 16px;
            letter-spacing: -0.5px;
        }

        .activity-description {
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-light);
            font-weight: 300;
        }

        @media (max-width: 768px) {
            .activities-container { padding: 0 20px 40px; }
            .activity-card { grid-template-columns: 1fr; gap: 24px; margin-bottom: 40px; }
            .activity-card:nth-child(even) .activity-image,
            .activity-card:nth-child(even) .activity-content { order: initial; }
            .activity-image img { height: 250px; }
            .activity-content { padding: 0; }
            .activity-title { font-size: 22px; }
        }

        @media (max-width: 480px) {
            .activity-image { border-radius: 16px; }
            .activity-image img { height: 220px; }
            .activity-title { font-size: 20px; }
        }
</style>
<section class="wellbeing-section">
        <div class="activities-container">
            <div class="activity-card">
                <div class="activity-image">
                    <img src="https://static.wixstatic.com/media/958742_246c7b60d2b943c1b97a98eb6a7030b5~mv2.jpg" alt="Fun run in Darling Harbour">
                </div>
                <div class="activity-content">
                    <h3 class="activity-title">Fun run (or walk) in Darling Harbour</h3>
                    <p class="activity-description">
                        A 30-minute run or walk taking place on the morning of day 2 at the event. The chance for those from out of state to see parts of the city while looking after their mental health and networking in a relaxed setting.
                    </p>
                </div>
            </div>

            <div class="activity-card">
                <div class="activity-image">
                    <img src="https://static.wixstatic.com/media/958742_64d51a731568480797e6c5f463b06853~mv2.jpg" alt="Wellbeing and networking zone">
                </div>
                <div class="activity-content">
                    <h3 class="activity-title">Wellbeing and networking zone</h3>
                    <p class="activity-description">
                        A quiet spot in the centre of the floor for attendees to relax and sit down for a break from the packed event schedule.
                    </p>
                </div>
            </div>

            <div class="activity-card">
                <div class="activity-image">
                    <img src="https://static.wixstatic.com/media/958742_a7f5e895e6f94a6f97e1a52a4782eae2~mv2.avif" alt="Puppy therapy">
                </div>
                <div class="activity-content">
                    <h3 class="activity-title">Puppy therapy</h3>
                    <p class="activity-description">
                        Attendees have the chance to meet and interact with beautiful therapy dogs and puppies, guaranteed to improve their mental health and create incredible memories.
                    </p>
                </div>
            </div>
        </div>
    </section>
`;
  }
}

customElements.define('mhww-wellbeing', MhwwWellbeing);
