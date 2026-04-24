# ZAO 101 — Agent Guide

This is a teaching site for people new to The ZAO. Every page exists so a newcomer can understand what The ZAO is, why it exists, and how to engage with it.

## Hard Rules

1. **Read `.quadwork-allowlist` before any Edit/Write.** Only touch paths that match. If a task needs a path outside the allowlist, halt and ask the operator.
2. **Never write secrets, API keys, private keys, or credentials to any file.**
3. **Never modify `vercel.json`, `.github/`, `package.json` (if added), or any config file without explicit operator approval.**
4. **One concern per PR.** Don't bundle unrelated changes.

## Voice + Content Rules

The ZAO's positioning (from Zaal's own words, not marketing):

- **Music first, community second, tech third.** Always lead with the music. The tech is in service of the music and the community.
- **Honest about scale.** 100+ members. Not "thousands." Small, tight, real.
- **Built in public.** Every step is documented. No secret moves.
- **Artist-led.** Artists come before builders. Builders come before speculators.
- **Four pillars:** Artist Org (ZTalent Artist Organization) / Autonomous Org / Operating System / Open Source. Reference these but don't turn them into marketing fluff.

When writing content:
- Use plain language. No crypto jargon unless explained.
- Say "The ZAO" (with "The"). Never "Zao" or "ZAO" alone when referring to the org.
- Say "Farcaster" not "Warpcast".
- Use hyphens, not em-dashes.
- No emojis anywhere (content, code, comments).
- Short sentences. One idea per line when possible.
- Real numbers beat vague claims. "100+ members" not "a large community".

## Style Rules

- Dark theme only — navy `#0a1628` background, gold `#f5a623` accent.
- Mobile first. Every page must render correctly at 375px width.
- No JavaScript frameworks. Plain HTML + CSS. If JS is needed, vanilla only.
- No new dependencies without explicit approval.

## Page Structure

- `/` — Home: hero + 4-pillar tiles
- `/pillars.html` — The 4 pillars, deep but readable
- `/join.html` — How to engage (3 doors: artist / builder / listener)
- `/faq.html` — Common questions
- `style.css` — Global theme

## What's Done, What's Placeholder

Look for `<div class="placeholder">TODO: ...</div>` — those are the gaps. Your job is to fill them with real, honest, short content that matches the voice rules above.

## Reference

- Main project: [thezao.com](https://thezao.com)
- Zaal on Farcaster: [@zaal](https://farcaster.xyz/zaal)
- This repo: [github.com/bettercallzaal/zao-101](https://github.com/bettercallzaal/zao-101)
