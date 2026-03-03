class MhwwStages extends HTMLElement {
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
            --gentle-coral: #e89f7e;
            --soft-lavender: #b39dbd;
            --warm-peach: #f4a87e;
            --muted-green: #8baa9c;
            --text-primary: #2d5a5a;
            --text-light: #6b8585;
            --bg-soft: #f8faf9;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'TTCommons', sans-serif;
            background: transparent;
            padding: 0;
        }

        .stages-section {
            max-width: 100%;
            margin: 0 auto;
            background: transparent;
            padding: 0;
            position: relative;
        }

        .stages-grid {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }

        .stage-card {
            background: white;
            border-radius: 24px;
            padding: 0;
            position: relative;
            overflow: hidden;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards;
            box-shadow: 0 4px 20px rgba(74, 155, 148, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid rgba(74, 155, 148, 0.1);
        }

        .stage-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(74, 155, 148, 0.18);
        }

        .stage-card:nth-child(1) { animation-delay: 0.1s; }
        .stage-card:nth-child(2) { animation-delay: 0.2s; }
        .stage-card:nth-child(3) { animation-delay: 0.3s; }
        .stage-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .stage-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            border-radius: 24px 24px 0 0;
        }

        .stage-card:nth-child(1)::before {
            background: #F4A261;
        }

        .stage-card:nth-child(2)::before {
            background: #B8A4C9;
        }

        .stage-card:nth-child(3)::before {
            background: #84A57F;
        }

        .stage-card:nth-child(4)::before {
            background: #D66853;
        }

        .stage-header {
            padding: 10px 32px 8px;
            background: linear-gradient(135deg, rgba(74, 155, 148, 0.03) 0%, transparent 100%);
            border-bottom: 1px solid rgba(74, 155, 148, 0.08);
        }

        .stage-logo {
            max-width: 260px;
            height: auto;
        }

        .stage-subtitle {
            font-size: 14px;
            font-weight: 600;
            color: var(--primary-teal);
            margin-top: 8px;
            line-height: 1.4;
        }

        .stage-content {
            padding: 32px;
        }

        .stage-description {
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-primary);
            margin-bottom: 24px;
            font-weight: 400;
        }

        .stage-sessions-title {
            font-size: 14px;
            font-weight: 700;
            color: var(--text-primary);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 18px;
        }

        .stage-sessions {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .stage-sessions li {
            font-size: 14px;
            line-height: 1.6;
            color: var(--text-light);
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
        }

        .stage-sessions li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 8px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
        }

        .stage-card:nth-child(1) .stage-sessions li::before { background: #F4A261; }
        .stage-card:nth-child(2) .stage-sessions li::before { background: #B8A4C9; }
        .stage-card:nth-child(3) .stage-sessions li::before { background: #84A57F; }
        .stage-card:nth-child(4) .stage-sessions li::before { background: #D66853; }

        .day-divider {
            font-size: 13px;
            font-weight: 700;
            color: var(--primary-teal);
            margin: 16px 0 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        @media (max-width: 1024px) {
            .stages-grid { gap: 24px; }
            .stage-header { padding: 8px 28px 6px; }
            .stage-content { padding: 28px; }
        }

        @media (max-width: 768px) {
            .stages-grid { grid-template-columns: 1fr; gap: 24px; }
            .stage-header { padding: 6px 24px 5px; }
            .stage-content { padding: 24px; }
            .stage-logo { max-width: 234px; }
        }

        @media (max-width: 480px) {
            .stage-card { border-radius: 20px; }
            .stage-header { padding: 5px 20px 4px; }
            .stage-content { padding: 20px; }
            .stage-logo { max-width: 208px; }
            .stage-description { font-size: 14px; }
            .stage-sessions li { font-size: 13px; }
        }
</style>
<section class="stages-section">
        <div class="stages-grid">
            <!-- Big Ideas Stage -->
            <div class="stage-card">
                <div class="stage-header">
                    <img src="https://static.wixstatic.com/shapes/958742_f8ee08ef69af4c0cb1887624ea2ab57a.svg" alt="The Big Ideas Stage" class="stage-logo">
                </div>
                <div class="stage-content">
                    <p class="stage-description">
                        Our flagship theatre, covering the major trends, challenges, and opportunities shaping the sector. Sessions explore technology, legal and regulatory developments, and the strategic value of positive mental health policies.
                    </p>
                    <div class="stage-sessions-title">Key Sessions Include:</div>
                    <ul class="stage-sessions">
                        <li>How to manage and support AI driven anxiety in the workplace</li>
                        <li>Legal updates every manager and leader needs to know</li>
                        <li>Hiring for a mentally healthy workplace</li>
                        <li>Using data to improve employee wellbeing</li>
                    </ul>
                </div>
            </div>

            <!-- What Works Stage -->
            <div class="stage-card">
                <div class="stage-header">
                    <img src="https://static.wixstatic.com/shapes/958742_80073dfb60834da7876114a951bae4e8.svg" alt="What Works Stage" class="stage-logo">
                </div>
                <div class="stage-content">
                    <p class="stage-description">
                        Our deep dive theatre, featuring a host of case studies and panel discussions to help you understand what really works for other businesses.
                    </p>
                    <div class="stage-sessions-title">Key Sessions Include:</div>
                    <ul class="stage-sessions">
                        <li>Case studies from businesses big and small</li>
                        <li>Understanding and responding to the needs of different generations</li>
                        <li>Managing stress and performance during high demand periods</li>
                    </ul>
                </div>
            </div>

            <!-- Leadership Stage -->
            <div class="stage-card">
                <div class="stage-header">
                    <img src="https://static.wixstatic.com/shapes/958742_03ce0f67814c473daa3e97e21cc3e1f8.svg" alt="The Leadership Stage" class="stage-logo">
                </div>
                <div class="stage-content">
                    <p class="stage-description">
                        A showcase theatre dedicated to demos, talks and conversations for products and services that have helped other organisations build healthier, more resilient workplaces.
                    </p>
                    <div class="stage-sessions-title">Key Sessions Include:</div>
                    <ul class="stage-sessions">
                        <li>The leadership imperative: Why mental health is now a CEO-level priority</li>
                        <li>What every executive needs to know about liability, due diligence, and strategy</li>
                    </ul>
                </div>
            </div>

            <!-- Innovation Stage -->
            <div class="stage-card">
                <div class="stage-header">
                    <img src="https://static.wixstatic.com/shapes/958742_9e718df8f647472f8ae30fdd3f140406.svg" alt="The Innovation Stage" class="stage-logo">
                </div>
                <div class="stage-content">
                    <p class="stage-description">
                        A showcase theatre dedicated to demos, talks and conversations for products and services that have helped other organisations build healthier, more resilient workplaces.
                    </p>
                    <div class="stage-sessions-title">Key Sessions Include:</div>
                    <ul class="stage-sessions">
                        <li>Live technology demos from platforms supporting workplace mental health</li>
                        <li>Conversations with businesses about how they successfully integrated external services into their mental health policies</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
`;
  }
}

customElements.define('mhww-stages', MhwwStages);
