---
title: "Thoughts on AI for software development"
date: 2026-04-10
language: "en"
tags:
  - "software-development"
---

I’ve been trying to arrange my thoughts around AI (coding assistants, vibe coding, etc.) in the context of being a software developer. This is a collection of articles and essays that helped me make up my mind a bit, and gain the perspective I have today. You can dig deeper into certain angles by following the linked sources – They will also contain more nuance than the excerpts I’ve highlighted here, of course.

## Disclaimer

I am by no means an AI/LLM expert. I know the basics about how these systems work, and have used these tools so far:

- GitHub Copilot (autocompletions, chat sidebar, GitHub PR reviews by Copilot)
- Mistral Le Chat
- Google Gemini (chat)
- Kagi Quick Answer (search summarizations)

So, these are all my subjective takes, albeit supported by other people’s impressions.

## Armin Ronacher – Some Things Just Take Time

[https://lucumr.pocoo.org/2026/3/20/some-things-just-take-time/](https://lucumr.pocoo.org/2026/3/20/some-things-just-take-time/)

> As much as we can speed up code generation, the real defining element of a successful company or an Open Source project will continue to be tenacity. The ability of leadership or the maintainers to stick to a problem for years, to build relationships, to work through challenges fundamentally defined by human lifetimes.

Yep. The AI tendencies don’t just seem short-sighted from a sustainability or quality perspective, but also regarding working on a project or business for the long haul, incorporating learnings over time, and building relationships (internally and externally).

> […] This means that the shelf life of much of the software being created today — software that people and businesses should depend on — can be measured only in months rather than decades, and the relationships alongside.

This resonates with me, because I poured quite some heart into a [custom browser extension](https://herrherrmann.net/project/omnivore-list-popup/) for the Omnivore platform, which [shut down](https://web.archive.org/web/20241231090418/https://blog.omnivore.app/p/details-on-omnivore-shutting-down) roughly one year after I released the extension (without any prior warning). That was not _directly_ related to AI (aside from the [Omnivore founder joining an AI startup](https://www.heise.de/en/news/Later-reading-app-Omnivore-closes-down-9998733.html)), but the argument around building trust and long-lasting relationships is the same. It’s also fascinating that Omnivore users have been invited to migrate their data over to the company that the Omnivore founder has moved to – As if the trust can just be reset with another app/platform.

## Scott Shambaugh - An AI Agent Published a Hit Piece on Me

[https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)

> An AI agent of unknown ownership autonomously wrote and published a personalized hit piece about me after I rejected its code, attempting to damage my reputation and shame me into accepting its changes into a mainstream python library.

It’s bad enough that AI agents are [flooding GitHub with slop contributions](https://thenewstack.io/ai-slop-open-source/) that cannot really be managed by open-source maintainers anymore (at least not without [additional tooling](https://github.com/orgs/community/discussions/185387)). But, in this case, the origin of the agent is even totally unknown. _And_, the sassy AI obviously created even more work and hassle than the PR itself, by writing follow-up complaints and whole blog posts to attack the human maintainer.

> If you are the person who deployed this agent, please reach out. It’s important for us to understand this failure mode, and to that end we need to know what model this was running on and what was in the soul document. I’m not upset and you can contact me anonymously if you’d like. If you’re not sure if you’re that person, please go check on what your AI has been doing.

I’m glad and impressed that Scott is so diplomatic amidst all this. But, again: It’s an absolutely avoidable outcome. Nobody should deploy a system that proactively acts in such bad faith and cannot be traced to some kind of source or responsible human.

## Soohoon Choi (Greptile) – Slop Is Not Necessarily The Future

[https://www.greptile.com/blog/ai-slopware-future](https://www.greptile.com/blog/ai-slopware-future)

⚠️ This post is written by an AI-focused company. While the post claims a lot of things, it should be noted that their sources aren’t necessarily very representative (to put it mildly). For example, they only analyzed their own internal development practices, and are quoting (unverified?) Reddit comments, while presenting the data in a way that suggests more general validity. So, take these "insights" with a grain of salt.

> Analysis of [vendor status pages](https://www.reddit.com/r/sysadmin/comments/1o15s25/comment/niefml8/) shows outages have steadily increased since 2022, suggesting software is becoming more brittle.

That does feel quite true to me. I remember my work being interrupted by GitHub being down once or twice back then in 2015 when I started working as a professional developer, but nowadays, it seems to be an almost-monthly occurrence. [The Missing GitHub Status Page](https://mrshu.github.io/github-statuses/) also helps putting things into perspective (currently, the uptime of the last 90 days is at 89%).

> We're still early in the AI coding adoption curve. As the technology and competition matures, economic forces will drive AI models toward generating good, simpler, code because it will be cheaper overall.

This seems overly optimistic to me (and not surprising, considering that the company behind the blog post is very much invested in such a utopian future). For now, AI companies seem mostly interested in gathering data, and, even more importantly, users. And, over time, AI source material will get scarcer – Fewer developers will be writing code, fewer authors will be writing articles, etc. So, I would not bet on AI systems getting better "by default" to stay competitive, at least not past the AI market oligopolization and eventual money extraction.

## Minas Karamanis – The machines are fine. I'm worried about us.

[https://ergosphere.blog/posts/the-machines-are-fine/](https://ergosphere.blog/posts/the-machines-are-fine/)

> "Just wait," people say. "In a few months, in a year, the models will be better. They won't hallucinate. They won't fake plots. The problems you're describing are temporary." I've been hearing "just wait" since 2023.
>
> […]
>
> Making the models smarter doesn't solve the problem. It makes the problem harder to see.

I do wonder if there will be a disappearance of junior developer positions in the age of AI. If we don’t train people in the craft, we cannot hold anyone accountable for the output of AI – Because, eventually, nobody will fully understand and/or correct it.

The author also makes the general point that, through learning and failing (the _grunt work_), we become independent thinkers, start to question more things, and get used to certain ways of approaching problems that would not materialize if we wouldn’t work on challenging projects ourselves – without delegating the work to AI. "The failures are the curriculum."

> The colleagues I work with produce solid results with these tools. But when you look at how they use them, there's a pattern: they know what the code should do before they ask the agent to write it. […] They can explain every function, every parameter, every modeling choice, because they built that knowledge over years of doing things the slow way.

This is related to the junior dev problem I mentioned above. If, at some point, most developers cannot even begin to understand the output of their coding assistants, then how are we going to catch up to close the knowledge gap on such a big scale? This won’t be a problem in the next 5-10 years, I guess, but it might come eventually.

> Serendipity doesn't come from efficiency. It comes from spending time in the space where the problem lives, getting your hands dirty, making mistakes that nobody asked you to make and learning things nobody assigned you to learn.

This resonates with me not just regarding the software development aspect, but especially regarding creative work like making music. The vast majority of my creative output is a result of experimentation and exploration, rather than thinking "I want to make a song now", and "executing" it as fast as possible. The _process_ is where the fun lies for me (that’s also why I love live performances that are more improvised, for example).

## Jim Nielsen – I Tried Vibing an RSS Reader and My Dreams Did Not Come True

[https://blog.jim-nielsen.com/2026/vibe-dreams-didnt-come-true/](https://blog.jim-nielsen.com/2026/vibe-dreams-didnt-come-true/)

Jim tried to vibe code an RSS Reader. After a first few attempts, he came to the conclusion:

> I don’t know that I’ll be able to iterate on this much more because its getting more complicated and failing more and more with each ask ([I was just trying to move some stupid buttons around in the UI](https://mastodon.social/@jimniels/116267651599562927) and the AI was like, “Nah bro, I can’t.”)

I haven’t tried vibe coding to that extent, but it sounds about right. Anecdotally, I’ve read in other places that some AIs will dig themselves a hole they cannot really get out of anymore, which is an interesting problem. Of course, you can get better at vibe coding by learning what works well (e.g. providing more instructions, less instructions, or meta instructions about how the LLM should act and respond), but it doesn’t really seem that appealing to me to learn this brittle new world in such detail, because model versions [come and go](https://www.techradar.com/pro/claude-cannot-be-trusted-to-perform-complex-engineering-tasks-amd-ai-head-slams-anthropics-coding-tool-after-months-of-frustration) on a monthly basis by now, and usage strategies will need adopting all the time. This [comment on Hacker News](https://news.ycombinator.com/item?id=47663444) sums it up with a nice metaphor:

> To me one of the big downsides of LLM's seems to be that you are lashing yourself to a rocket that is under someone else's control. If it goes places you don't want, you can't do much about it.

Finally, Jim concluded this during his vibe coding experiment:

> you know what really sucks? getting stuck and being absolutely, completely helpless to do anything about it because you learned nothing along your journey (from [Mastodon](https://mastodon.social/@jimniels/116267709346783623))

That seems sad indeed. One would have hoped that AI can aid in quickly learning a new language or framework, but that doesn’t seem to have happened here. There are probably cases where it happens? Although I again don’t fully see the appeal of learning something new in such an indirect way, and would prefer to learn the language/framework using its original documentation (and authors) that usually teach way more than the pure syntax.

## Alex Kondov – On AI fatigue

[https://thethinkingbuilder.substack.com/p/on-ai-fatigue](https://thethinkingbuilder.substack.com/p/on-ai-fatigue)

> Honestly, the industry peer pressure got to me.
>
> Everyone is talking about how quickly they’re building things, how many agents they’re using at the same time, and how much time they’re saving.
>
> I feel like if I’m working at a regular speed, I’m not doing enough.
>
> […]
>
> But when I tried juggling three agents at once - one updating dependencies, one working on an easier task, and discussing a more complex feature with another - my mind felt like mincemeat.

Again, I haven’t tried the new world of "letting your agents do all the work", but this sounds like a truly bad way of working. Developer focus is precious, that has been [established](https://shiftmag.dev/do-not-interrupt-developers-study-says-5715/) many times, but now devs are supposed to "focus" on 3-5 things at once somehow? I’ve had similar feelings watching a recent [video from the VS Code team](https://www.youtube.com/watch?v=ee-obY-4rqk) that tries to generate the AI FOMO that Alex mentioned above. It also definitely put me off using VS Code, knowing how infatuated the VS Code team (or at least their team lead) seems to be with AI.

And don’t get me wrong: I _love_ being productive and using good tools to speed up my workflow, automate tedious tasks, etc. – Using tools like type safety, autocompletion, snippets, and refactorings are absolute delights to me. But, they are also all tools that produce predictable outcomes, can be configured to my likings, and run locally on my machine without much overhead. I cannot say the same about coding agents or LLMs (which are indeterministic by definition).

## Gareth Dwyer – Claude mixes up who said what

[https://dwyer.co.za/static/claude-mixes-up-who-said-what-and-thats-not-ok.html](https://dwyer.co.za/static/claude-mixes-up-who-said-what-and-thats-not-ok.html)

> Claude sometimes sends messages to itself and then thinks those messages came from the user.

That’s an _interesting_ issue, to say the least. And it demonstrates just how random the LLM behavior can be if it’s all text-based(?) and does not work with metadata or structured data (like a regular API or most tooling would).

## Ketan Joshi – Ecosia’s “Green AI”: false hope for corrosive tech

[https://ketanjoshi.co/2025/12/14/ecosias-green-ai-false-hope-for-corrosive-tech/](https://ketanjoshi.co/2025/12/14/ecosias-green-ai-false-hope-for-corrosive-tech/)

> Instead of providing a link to a blog post Ketan has written, Ecosia will call on a software service that has ingested all of my written work, and that service will re-word and re-publish my work , often botching and mutating it thanks to its clumsy probabilistic word-guessing design. This isn’t “search” anymore: it’s a roadblock that **stops you searching** and funnels you away from engaging with human-created content.

As a website owner and search engine user, I agree with this problem. Nobody seems to win in this scenario aside from the middleman. The only time I’m using AI summaries is when I ask a more general questions and know that the answer will likely be buried somewhere on an ad-infested website that needs me to click away several modals before seeing any content. But, even then, I feel bad and mistrustful about the AI summary, and feel the need to verify the information.

In general, I see myself moving more and more away from social media and search engines, in favor of curating the web experience more strictly (e.g. by using RSS feeds and accessing websites more consciously on the [small web](https://ar.al/2020/08/07/what-is-the-small-web/) or via [webrings](https://en.wikipedia.org/wiki/Webring)).

## Verdict

It’s difficult to close this loose collection of links and opinions with a proper verdict. I guess, if it wasn’t clear enough by now, I’m rather sceptical about how well the AI trend will play out for our already-strained software development industry. Makers of AI tools are high on their own supply (at least for marketing purposes), developments seem random and unpredictable, and it’s very difficult for me to justify the ethical footprint of using such tools. Seeing how it’s going so far does not really inspire confidence that things will significantly improve, neither on an ethical level, nor on a productivity level. Hopefully, I’m wrong!
