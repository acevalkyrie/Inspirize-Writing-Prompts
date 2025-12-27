function makePrompt(prompt, type, complexity, emotion) {
    this.prompt = prompt;
    this.type = type;
    this.complexity = complexity;
    this.emotion = emotion;
}

const lstPrompts = [
    { prompt: '"'+"I don't really trust anyone by now."+'"', type: "quote", complexity: null, emotion: "sad" },
    { prompt: '"'+"I know <em>you're</em> fine. That doesn't really tell me what <em>I'm</em> supposed to do."+'"', emotion: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I know how to put a strong face on. I'll be fine."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I guess I'm just not as brave as I used to be."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I really messed up this time, didn't I?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I'm still holding on. I never learn, do I?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I feel bad for things I didn't even do."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I feel bad for you, dealing with me all the time."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Sometimes I honestly wish I could forget who I am."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I can't trust myself with anything, can I?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I'm barely keeping it together as it is, okay?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"It doesn't matter if I listen to my head or my heart. They both keep telling me no."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Please don't leave me alone with my thoughts. I don't really need to hear the voice of the enemy right now."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"You know that's a promise I can't keep."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I don't really sleep, lately. Mostly just stare at the ceiling."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Look, I didn't mean to be such a letdown."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I always end up alone in the end, anyways."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I'm not sure how much longer I can do all of this."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Um, I really don't think I can drive like this, with the—the tears, and all."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Why do you only ever remember the bad stuff?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I really just can't get it right."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Hey, if it's a good enough joke, it hides the damage, right?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"If I pretend long enough, maybe I'll forget for real."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I never want to go through this again."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Do you know how hard it is not to call you?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"How is it so easy for you to throw me away?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I think I'm burning out now."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I'm pretty much at the end of my rope."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I don't really know what I believe anymore."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I can't do this anymore. It's not fair."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"When I look at you, I feel like I'm seeing a stranger."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"What do you want me to say? Please, I'm trying to figure it out."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I just—I need to make this right."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I don't feel like anyone can see me anymore. Like I'm disappearing."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I wish I could hold onto everything. I wish I could make it all stay."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Sometimes I think you'd leave if you knew everything I'd ever done."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I guess you could call it a cry for help."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I don't love the person I see in the mirror."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I'm not sure I really even know myself."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Can you just be there for me when I crash and burn? I really don't think I'll make it."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Is it so hard to imagine? Redemption?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I was right, and if anyone asks, I knew it the whole time."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"You think I can help it? I'm selfish."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I'm such a mess."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I'm just stuck in a rut. I haven't been able to get out."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"This is just not my weekend."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I don't want to waste any more time here."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"Every mistake I make has to be so expensive, doesn't it?"+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"This is the wrong time for this breakdown."+'"', type: "quote", complexity: null, emotion: "sad"},
    { prompt: '"'+"I'm not taking the blame for this anymore."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"You either get me to admit I was wrong, or you get to say I told you so, but you don't get both."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Wow. That's talent, burning so many bridges all at once."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"How's the weather up on that high horse? Can see me, or do you need a telescope?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Hey, man. Get your foot out of your mouth, ew, you don't know where that thing's been."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Hey! You can't deny that my intentions were good! Just, uh, don't look at the results."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I'm listening! It's just, the devil on my shoulder's saying it would be <em>really</em> funny."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"It was broken when I got here!"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Don't ask how I get into these situations. I don't know either."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"One of these days a plan of mine will go off without a hitch, okay."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Can you not ruin my fun when I'm being melodramatic?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Ladies and gentlemen, it was an honor. Now <em>SCATTER!</em>"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I see you opening your mouth—do <em>not</em> ask if I need help, me and the pickle jar are embarrassed enough already."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Sometimes I wish I had as little shame as you do."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Yep. Just keep changing your story. Something's gonna sound convincing eventually."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"If you think about it, this is actually your fault. You <em>could</em> have tried harder to stop me."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I definitely cannot come to the phone right now, please leave a message after I hang up on you, bye!"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"You really ought to have a warning sign or three taped to your forehead."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Are you gonna keep laughing or are you gonna help me up?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Does it count as being alone if the TV's playing?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I'm pretty hard to handle, so you'll probably want to get a good grip."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Don't tell me it's after noon. It's morning if I say it is."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Wait, hold on. Do I need a lawyer?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I have no shame, I'll do anything for money."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I have the heart and soul of a gamer."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"So do you want my color commentary, or do you think you're distracted enough already?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Well, this ship is officially sinking. Good luck with all that."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I am partying like this is not my party. No one talk to me about the cleanup."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Should I consider this a cry for help? It's kind of screaming 'cry for help.'"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"The sunglasses help me care less."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I think I'm just going to let my mom decide."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Look, I got the door open. I'm a genius."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I'm being babysat right now."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Well, I wasn't gonna rat you out."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"You're confused. I don't do this because I need to, it's just that I want to. And I don't have self control."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"I would have loved to grab one, but that's not why we're here."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"He's just sprinting down the street? Where is he going?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Just go ahead and smash it. Just break it."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"You were no help at all. I'm going to remember that."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"What a great question, asked by an absolute maniac."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"It's a normal way to sit in a chair."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Wait, is it bad that we just started breaking everything?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Thank you for saying it so I didn't have to."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Can we just pretend that I'm impressive?"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"They didn't let <em>me</em> try!"+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"Well, I was <em>going</em> to say something that would fix all of our problems, but now I don't want to anymore."+'"', type: "quote", complexity: null, emotion: "silly"},
    { prompt: '"'+"No, it's <em>not</em> over! Not until I say it is."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Hey! I'm not the one starting this fight, I'm just gonna <em>finish it.</em>"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"My bite's a lot worse than my bark. Back off."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Oh, quit pretending that you'll change."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You think you're sorry? I'll <em>make</em> you sorry."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You know what? Stop thinking about how to fix this. Stop thinking about me at all."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Move before I empty my drink on your head."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Don't act like you have no idea why I'm mad."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"It would just kill you to mind your own business, wouldn't it?"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"As long as you're mad, I'm winning."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You know, I wanted to hate you, but this is just pathetic."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"If you wanted an enemy, you've got one."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"No, you did <em>not</em> apologize. <em>When</em> do you think you apologized?"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You're taking this way, <em>way</em> too far!"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You're really going to pretend none of this is your fault?"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You hold grudges even better than I do. It sucks."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Every time you tell me to calm down, I get angrier."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"How many chances do you plan on throwing away?"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You are the fakest person I have ever met, you know that?"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You made me hate this song."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"There aren't many things I hate more than you."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"If you try to give me one more excuse, I'm gonna make you choke on it."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"I'm so sick of all your games."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"I'm not afraid to take you out."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"It's easy for <em>you</em> to say it's for the best."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You're only making me want to prove you wrong more."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"I don't need your help, so I don't care that you're not offering."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"I'm taking my dreams back, no matter what the world tries to do about it."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You can stop lying to me just this once."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Don't worry, I already know I can't take you at your word."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"At least look me in the eyes so I can see you lie to me."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"I've fallen for every word you've ever said."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Like a second chance would matter. You wouldn't change."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"I let you hold me down long enough."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"I can't stand this. I feel like I'm about to blow."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"If I hear one more excuse, you won't like what happens."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"My soul's not for sale, thanks."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"This is what you made me do! It's your fault!"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"That's just another reason I should never have met you."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"That shouldn't be held against <em>me!</em>"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"I really hope I never see any of you again."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You can't just bend the truth whenever it suits you."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Don't you get tired of everyone pulling away from you?"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You're the one to blame, you understand that, don't you?"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You think I'm just a game you can play when you're bored."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"You can say it's for my own good all you want. You aren't helping and we both know it."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"If you're trying to make me feel ashamed, then great job."+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"Is this what you wanted to see?"+'"', type: "quote", complexity: null, emotion: "angry"},
    { prompt: '"'+"All right, let's party."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Me? I'm fine, I'll just keep trying."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Turns out falling asleep in the front lawn? Weirdly peaceful."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I kind of feel like dancing, actually."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Have you ever been somewhere so beautiful?"+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I think I can do pretty much anything."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Don't worry about me, I bounce back."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I've had four cups of coffee today. I'm feeling awesome."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Are you kidding me? I've had a fantastic day, I could take on the world right now."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Oh, I could get used to this."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I have so much energy today. This is great."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I really love when the sun shines just like this."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Well, I'm not <em>trying</em> to brag. I'm just feeling pretty good."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I don't break so easy. I can keep going."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I always feel so clear-headed in the morning."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Well, it's another year. A fresh start."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"It's my time."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Your life only belongs to you. You can do whatever you want with it."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Come on, do a twirl."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"It's weird, but I'm feeling great."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"This is such a treat for me."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Well, I know what I'm doing if we ever do a talent show."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I feel like I just cast a spell."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"It's all about the build-up!"+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I set the bar for sure."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Well, that was great. I need to wash my hands."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I think I come off perfect. All the time."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"It's impossible not to hope, you know?"+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"That's… actually mesmerizing. I'm captivated."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I clean up pretty nice, right?"+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I really wish this moment could last forever. I'm so happy."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Believe it or not, it's great."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"Laugh with me, please. Or at me. I just want to hear you laugh."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"This is everything I've been waiting for."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"I'm going to be the best you've ever seen, watch me."+'"', type: "quote", complexity: null, emotion: "happy"},
    { prompt: '"'+"No, I don't want to split up! Haven't you ever seen a horror movie?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"By all means, go right ahead. I'll say something nice at your funeral."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"This is the loudest silence I have ever heard. I hate this."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Tell me it's all in my head. It's all in my head, right?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Don't <em>do</em> that! My hands are shaking!"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Give me a second, I can't hear you over my heartbeat."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Why do I feel like I'm being watched? Don't you feel like you're being watched?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I, uh, I think I need a hospital."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I will give you all the cash I have on me if you will just <em>please</em> kill that spider already!"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"How are you not freaking out right now?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Is that a siren? That's not the cops, is it?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I think I just blacked out. I've never been so scared in my life."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Who turned the lights off?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I am definitely not sleeping tonight."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Am I haunted? If I'm haunted after this I'll never forgive you."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"You make me feel like vultures are circling me. What's about to happen?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I don't like that look in your eyes. It scares me."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I can't move. I seriously can't move."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Oh, no, not your mom. That's my worst nightmare."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I don't know what that was."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"It sounds like a joke, but it actually haunts me."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I'm just going to keep getting older, you know?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I'm so paranoid, did you hear that?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I looked up and you were gone."+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Is my nose bleeding?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"Am I going to end up dead by the end of this?"+'"', type: "quote", complexity: null, emotion: "scared"},
    { prompt: '"'+"I'm sure you've heard the news."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I don't really care what people think about it."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Well, that was bold."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"If you're gonna say it, say it with your whole chest."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Well, I have to appreciate the honesty."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Are you serious? What a guy."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Oh, is 'friends' what  you'd call us?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"It is way, <em>way</em> too cold in here."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I need a tank top. I'm melting."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Oh, I think you know exactly what I'm getting at."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I don't know what I expected, but this was… definitely not it."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Yeah, yeah, always a critic."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Well, you know, admitting the problem is the first step, right?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"What, you've never seen a sunburn before?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Look. I made the bed, I might as well lie in it."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I do have to ask. Who cares?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"This feels like a fever dream."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I don't want any part in this. Can't you let me play mobile games in peace?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Look, it's not personal or anything."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I've been thinking about just taking a drive."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Talk quieter, I have <em>such</em> a headache."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Aaaand another one bites the dust."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Hey, I've got thick skin. I can take it."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I'm doing everything I can."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"How are you so polite all the time?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"You make it look so easy."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"You haven't seen the last of me yet."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I don't really make excuses. People will be all right with me or they won't."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I won't go."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I can take the truth, you know."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"You have to be tired of hiding from me by now."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I guess most of those problems were all in my head, huh?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I can't leave, but I can't exactly stay, either."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"We're all lost until we get found."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Don't judge me. You'd do it, too, if you could."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I can't do this without you. Help me."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"That's a conversation I really can't have right now."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I have no idea how I'm getting home after all of this."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Well? Are you with me?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Are you ready? Because I'm going."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"There's going to be nothing left to burn at some point."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Oh, no one's ever going to change me."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"You know I'm bad at listening."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I don't mind wearing the scar. Means I got out, right?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I've got too much pride, we all know that."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I feel it in my bones."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"It's like a feeling under my skin. I can't shake it."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"Don't forget who you are. You've heard that before, right?"+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"You had your chance already."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"It just caught my eye."+'"', type: "quote", complexity: null, emotion: "general"},
    { prompt: '"'+"I love when your eyes get starry like that. I could watch you for hours."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"You know I think this is way too much space in between us. Get over here."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"You're the only thing that's been constant lately. I don't know what I'd do without you."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I really don't think I could lose you. I don't know what I'd do."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"You know, we're not far from the place we first met. Best day of my life."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"Oh, it's been way too long since I've seen your face."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"Absolutely everything reminds me of you."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"You make me really comfortable."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I just feel warm when you're next to me."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I really think you're stronger than I am. I'd trust you with anything."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I always feel you out there. I'm never alone."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I always feel better when you're here."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"It's hard to sleep without you beside me."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I think you're the voice inside my head. Or maybe my heart, I can't always tell the difference."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"You already know in any crowd I'm looking for your face."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I'd really do anything to keep you with me."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"You know this is just how I show my love."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"Just take me home already."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I think I'm starting to see all the things you see in me."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"For you? I think I would do anything. Could do anything."+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"I don't get a kiss goodbye?"+'"', type: "quote", complexity: null, emotion: "affectionate"},
    { prompt: '"'+"Classic mistake. I'm just too honest."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I'm not gonna say 'you chose this', but you absolutely did choose this."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"Do we have to do this at three A.M.? I can't even walk straight right now."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I might have gotten carried away with that."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"Why am I the one who always has to sleep on the floor?"+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I just heard bottles breaking too many times. What's happening?"+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"That's just the way it goes, you know?"+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I'm in way too deep now. There's no way I'm getting out."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"You've given me a weapon."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"There's something crucial that you're missing, though."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"That's quite enough of that."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"Where did it all come from?"+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"It really did hurt when I landed."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I'm starting on a very low note."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"Somehow it's worse."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"That's for you to decide, my friend."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I don't know. I forgot what I was talking about."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I honestly planned on not coming at all."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I think I'm done trying to fit in. It's not a comfortable fit."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I think it's time to slow down."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I don't think anyone expected me to get this far. Me included."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I'm never going back. I'd die first."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I just want to keep burying it, I think."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"You can keep pretending they're nothing like you if you want."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"Well, my intuition led me absolutely nowhere."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"Wow, you really do have a one-track mind."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"At least one of us has no regrets."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I need to find somewhere to thaw out."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"You've made your point."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"Something has to give."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I'll get time soon."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"It's so close I can taste it."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"You don't want to be alone. No one does."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"We've both known it the whole time."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: '"'+"I don't really remember anything that was said."+'"', type: "quote", complexity: null, emotion: "miscellaneous"},
    { prompt: "moving", type: "action", complexity: null, emotion: null},
    { prompt: "shopping", type: "action", complexity: null, emotion: null},
    { prompt: "stealing", type: "action", complexity: null, emotion: null},
    { prompt: "finding", type: "action", complexity: null, emotion: null},
    { prompt: "bleeding", type: "action", complexity: null, emotion: null},
    { prompt: "losing", type: "action", complexity: null, emotion: null},
    { prompt: "taking", type: "action", complexity: null, emotion: null},
    { prompt: "giving", type: "action", complexity: null, emotion: null},
    { prompt: "thinking", type: "action", complexity: null, emotion: null},
    { prompt: "planning", type: "action", complexity: null, emotion: null},
    { prompt: "weeping", type: "action", complexity: null, emotion: null},
    { prompt: "remembering", type: "action", complexity: null, emotion: null},
    { prompt: "forgetting", type: "action", complexity: null, emotion: null},
    { prompt: "staying", type: "action", complexity: null, emotion: null},
    { prompt: "leaving", type: "action", complexity: null, emotion: null},
    { prompt: "hiding", type: "action", complexity: null, emotion: null},
    { prompt: "running", type: "action", complexity: null, emotion: null},
    { prompt: "ending", type: "action", complexity: null, emotion: null},
    { prompt: "beginning", type: "action", complexity: null, emotion: null},
    { prompt: "learning", type: "action", complexity: null, emotion: null},
    { prompt: "teaching", type: "action", complexity: null, emotion: null},
    { prompt: "burning", type: "action", complexity: null, emotion: null},
    { prompt: "pulling", type: "action", complexity: null, emotion: null},
    { prompt: "pushing", type: "action", complexity: null, emotion: null},
    { prompt: "shivering", type: "action", complexity: null, emotion: null},
    { prompt: "sweating", type: "action", complexity: null, emotion: null},
    { prompt: "flying", type: "action", complexity: null, emotion: null},
    { prompt: "swimming", type: "action", complexity: null, emotion: null},
    { prompt: "digging", type: "action", complexity: null, emotion: null},
    { prompt: "burying", type: "action", complexity: null, emotion: null},
    { prompt: "carrying", type: "action", complexity: null, emotion: null},
    { prompt: "glowing", type: "action", complexity: null, emotion: null},
    { prompt: "dimming", type: "action", complexity: null, emotion: null},
    { prompt: "throwing", type: "action", complexity: null, emotion: null},
    { prompt: "catching", type: "action", complexity: null, emotion: null},
    { prompt: "conspiring", type: "action", complexity: null, emotion: null},
    { prompt: "red", type: "color", complexity: null, emotion: null},
    { prompt: "crimson", type: "color", complexity: null, emotion: null},
    { prompt: "rose", type: "color", complexity: null, emotion: null},
    { prompt: "maroon", type: "color", complexity: null, emotion: null},
    { prompt: "pink", type: "color", complexity: null, emotion: null},
    { prompt: "orange", type: "color", complexity: null, emotion: null},
    { prompt: "rust", type: "color", complexity: null, emotion: null},
    { prompt: "coral", type: "color", complexity: null, emotion: null},
    { prompt: "chocolate", type: "color", complexity: null, emotion: null},
    { prompt: "ivory", type: "color", complexity: null, emotion: null},
    { prompt: "yellow", type: "color", complexity: null, emotion: null},
    { prompt: "gold", type: "color", complexity: null, emotion: null},
    { prompt: "dandelion", type: "color", complexity: null, emotion: null},
    { prompt: "beige", type: "color", complexity: null, emotion: null},
    { prompt: "cream", type: "color", complexity: null, emotion: null},
    { prompt: "green", type: "color", complexity: null, emotion: null},
    { prompt: "spring green", type: "color", complexity: null, emotion: null},
    { prompt: "emerald", type: "color", complexity: null, emotion: null},
    { prompt: "cyan", type: "color", complexity: null, emotion: null},
    { prompt: "teal", type: "color", complexity: null, emotion: null},
    { prompt: "blue", type: "color", complexity: null, emotion: null},
    { prompt: "turquoise", type: "color", complexity: null, emotion: null},
    { prompt: "navy", type: "color", complexity: null, emotion: null},
    { prompt: "sky blue", type: "color", complexity: null, emotion: null},
    { prompt: "indigo", type: "color", complexity: null, emotion: null},
    { prompt: "violet", type: "color", complexity: null, emotion: null},
    { prompt: "fuschia", type: "color", complexity: null, emotion: null},
    { prompt: "hot pink", type: "color", complexity: null, emotion: null},
    { prompt: "plum", type: "color", complexity: null, emotion: null},
    { prompt: "lavender", type: "color", complexity: null, emotion: null},
    { prompt: "lilac", type: "color", complexity: null, emotion: null},
    { prompt: "brown", type: "color", complexity: null, emotion: null},
    { prompt: "black", type: "color", complexity: null, emotion: null},
    { prompt: "gray", type: "color", complexity: null, emotion: null},
    { prompt: "silver", type: "color", complexity: null, emotion: null},
    { prompt: "white", type: "color", complexity: null, emotion: null},
    { prompt: "bravery", type: "trait", complexity: 1, emotion: null},
    { prompt: "selfishness", type: "trait", complexity: 1, emotion: null},
    { prompt: "innocence", type: "trait", complexity: 1, emotion: null},
    { prompt: "brilliance", type: "trait", complexity: 1, emotion: null},
    { prompt: "victory", type: "trait", complexity: 1, emotion: null},
    { prompt: "defeat", type: "trait", complexity: 1, emotion: null},
    { prompt: "optimism", type: "trait", complexity: 1, emotion: null},
    { prompt: "pessimism", type: "trait", complexity: 1, emotion: null},
    { prompt: "loyalty", type: "trait", complexity: 1, emotion: null},
    { prompt: "kindness", type: "trait", complexity: 1, emotion: null},
    { prompt: "cruelty", type: "trait", complexity: 1, emotion: null},
    { prompt: "hypocrisy", type: "trait", complexity: 1, emotion: null},
    { prompt: "imagination", type: "trait", complexity: 1, emotion: null},
    { prompt: "arrogance", type: "trait", complexity: 1, emotion: null},
    { prompt: "humility", type: "trait", complexity: 1, emotion: null},
    { prompt: "honesty", type: "trait", complexity: 1, emotion: null},
    { prompt: "individuality", type: "trait", complexity: 1, emotion: null},
    { prompt: "creativity", type: "trait", complexity: 1, emotion: null},
    { prompt: "open-mindedness", type: "trait", complexity: 1, emotion: null},
    { prompt: "ambitiousness", type: "trait", complexity: 1, emotion: null},
    { prompt: "compassion", type: "trait", complexity: 1, emotion: null},
    { prompt: "assertiveness", type: "trait", complexity: 1, emotion: null},
    { prompt: "benevolence", type: "trait", complexity: 1, emotion: null},
    { prompt: "politeness", type: "trait", complexity: 1, emotion: null},
    { prompt: "rudeness", type: "trait", complexity: 1, emotion: null},
    { prompt: "confidence", type: "trait", complexity: 1, emotion: null},
    { prompt: "uncertainty", type: "trait", complexity: 1, emotion: null},
    { prompt: "hesitance", type: "trait", complexity: 1, emotion: null},
    { prompt: "strength", type: "trait", complexity: 1, emotion: null},
    { prompt: "weakness", type: "trait", complexity: 1, emotion: null},
    { prompt: "diligence", type: "trait", complexity: 1, emotion: null},
    { prompt: "carelessness", type: "trait", complexity: 1, emotion: null},
    { prompt: "faithfulness", type: "trait", complexity: 1, emotion: null},
    { prompt: "disloyalty", type: "trait", complexity: 1, emotion: null},
    { prompt: "immaturity", type: "trait", complexity: 1, emotion: null},
    { prompt: "mercy", type: "trait", complexity: 1, emotion: null},
    { prompt: "light and dark", type: "theme", complexity: 1, emotion: null},
    { prompt: "mortality", type: "theme", complexity: 1, emotion: null},
    { prompt: "growth", type: "theme", complexity: 1, emotion: null},
    { prompt: "care", type: "theme", complexity: 1, emotion: null},
    { prompt: "grief", type: "theme", complexity: 1, emotion: null},
    { prompt: "healing", type: "theme", complexity: 1, emotion: null},
    { prompt: "change", type: "theme", complexity: 1, emotion: null},
    { prompt: "unity", type: "theme", complexity: 1, emotion: null},
    { prompt: "passage of time", type: "theme", complexity: 1, emotion: null},
    { prompt: "new and old", type: "theme", complexity: 1, emotion: null},
    { prompt: "heaviness and lightness", type: "theme", complexity: 1, emotion: null},
    { prompt: "opposites", type: "theme", complexity: 1, emotion: null},
    { prompt: "corruption", type: "theme", complexity: 1, emotion: null},
    { prompt: "truth", type: "theme", complexity: 1, emotion: null},
    { prompt: "nature", type: "theme", complexity: 1, emotion: null},
    { prompt: "technology", type: "theme", complexity: 1, emotion: null},
    { prompt: "redemption", type: "theme", complexity: 1, emotion: null},
    { prompt: "revenge", type: "theme", complexity: 1, emotion: null},
    { prompt: "identity", type: "theme", complexity: 1, emotion: null},
    { prompt: "freedom", type: "theme", complexity: 1, emotion: null},
    { prompt: "choice", type: "theme", complexity: 1, emotion: null},
    { prompt: "family", type: "theme", complexity: 1, emotion: null},
    { prompt: "hope", type: "theme", complexity: 1, emotion: null},
    { prompt: "jealousy", type: "theme", complexity: 1, emotion: null},
    { prompt: "trust", type: "theme", complexity: 1, emotion: null},
    { prompt: "tradition", type: "theme", complexity: 1, emotion: null},
    { prompt: "chaos and order", type: "theme", complexity: 1, emotion: null},
    { prompt: "communication", type: "theme", complexity: 1, emotion: null},
    { prompt: "rebellion", type: "theme", complexity: 1, emotion: null},
    { prompt: "dedication", type: "theme", complexity: 1, emotion: null},
    { prompt: "vanity", type: "theme", complexity: 1, emotion: null},
    { prompt: "temptation", type: "theme", complexity: 1, emotion: null},
    { prompt: "acceptance", type: "theme", complexity: 1, emotion: null},
    { prompt: "perfection", type: "theme", complexity: 1, emotion: null},
    { prompt: "inspiration", type: "theme", complexity: 1, emotion: null},
    { prompt: "impossibility", type: "theme", complexity: 1, emotion: null},
    { prompt: "someone older", type: "company", complexity: null, emotion: null},
    { prompt: "someone younger", type: "company", complexity: null, emotion: null},
    { prompt: "a former friend", type: "company", complexity: null, emotion: null},
    { prompt: "a new friend", type: "company", complexity: null, emotion: null},
    { prompt: "a room full of strangers", type: "company", complexity: null, emotion: null},
    { prompt: "close friends at a party", type: "company", complexity: null, emotion: null},
    { prompt: "a family member", type: "company", complexity: null, emotion: null},
    { prompt: "one stranger", type: "company", complexity: null, emotion: null},
    { prompt: "someone they admire", type: "company", complexity: null, emotion: null},
    { prompt: "someone they look down on", type: "company", complexity: null, emotion: null},
    { prompt: "a close friend", type: "company", complexity: null, emotion: null},
    { prompt: "an awkward acquaintance", type: "company", complexity: null, emotion: null},
    { prompt: "a handful of peers", type: "company", complexity: null, emotion: null},
    { prompt: "an authority figure", type: "company", complexity: null, emotion: null},
    { prompt: "a rival", type: "company", complexity: null, emotion: null},
    { prompt: "a childhood friend", type: "company", complexity: null, emotion: null},
    { prompt: "a mentor", type: "company", complexity: null, emotion: null},
    { prompt: "a mentee", type: "company", complexity: null, emotion: null},
    { prompt: "a few neighbors", type: "company", complexity: null, emotion: null},
    { prompt: "a new neighbor", type: "company", complexity: null, emotion: null},
    { prompt: "no one", type: "company", complexity: null, emotion: null},
    { prompt: "someone they expected to see", type: "company", complexity: null, emotion: null},
    { prompt: "someone they never expected to see", type: "company", complexity: null, emotion: null},
    { prompt: "a small team", type: "company", complexity: null, emotion: null},
    { prompt: "strangers on an elevator", type: "company", complexity: null, emotion: null},
    { prompt: "someone who needs something from them", type: "company", complexity: null, emotion: null},
    { prompt: "someone who they need something from", type: "company", complexity: null, emotion: null},
    { prompt: "a crowd at an event", type: "company", complexity: null, emotion: null},
    { prompt: "a couple of associates", type: "company", complexity: null, emotion: null},
    { prompt: "a doctor and/or a nurse", type: "company", complexity: null, emotion: null},
    { prompt: "a waitor and/or a cook", type: "company", complexity: null, emotion: null},
    { prompt: "friends here to help", type: "company", complexity: null, emotion: null},
    { prompt: "someone trying to stop them", type: "company", complexity: null, emotion: null},
    { prompt: "passersby on the street", type: "company", complexity: null, emotion: null},
    { prompt: "a dubious magician", type: "company", complexity: null, emotion: null},
    { prompt: "a stray animal", type: "company", complexity: null, emotion: null},
    { prompt: "they're making up for something", type: "reason", complexity: 1, emotion: null},
    { prompt: "this has been planned for weeks", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're breaking a promise", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're keeping a promise", type: "reason", complexity: 1, emotion: null},
    { prompt: "they forgot to do it sooner", type: "reason", complexity: 1, emotion: null},
    { prompt: "they were asked to by a friend", type: "reason", complexity: 1, emotion: null},
    { prompt: "they don't want to owe someone else", type: "reason", complexity: 1, emotion: null},
    { prompt: "they have no other choice", type: "reason", complexity: 1, emotion: null},
    { prompt: "it's better than the alternative", type: "reason", complexity: 1, emotion: null},
    { prompt: "they knew why when they started, but they don't anymore", type: "reason", complexity: 1, emotion: null},
    { prompt: "if they don't, there will be consequences", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're trying to distract themself", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're trying to distract someone else", type: "reason", complexity: 1, emotion: null},
    { prompt: "someone told them not to and they don't want to listen", type: "reason", complexity: 1, emotion: null},
    { prompt: "it was a spur of the moment decision", type: "reason", complexity: 1, emotion: null},
    { prompt: "they've been putting it off for too long", type: "reason", complexity: 1, emotion: null},
    { prompt: "it seemed like a good idea at the time", type: "reason", complexity: 1, emotion: null},
    { prompt: "they want to prove something", type: "reason", complexity: 1, emotion: null},
    { prompt: "they are trying to impress someone", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're looking for adventure", type: "reason", complexity: 1, emotion: null},
    { prompt: "they are trying to protect someone", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're trying to get over something", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're curious", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're trying to keep a secret", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're trying to uncover a secret", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're trying to solve a mystery", type: "reason", complexity: 1, emotion: null},
    { prompt: "they got lost doing something else", type: "reason", complexity: 1, emotion: null},
    { prompt: "they got distracted dong something else", type: "reason", complexity: 1, emotion: null},
    { prompt: "they want to see something through", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're meddling in someone else's relationship", type: "reason", complexity: 1, emotion: null},
    { prompt: "it's better than doing nothing", type: "reason", complexity: 1, emotion: null},
    { prompt: "they want to cause problems on purpose", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're stepping in for someone else", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're trying to cheer someone up", type: "reason", complexity: 1, emotion: null},
    { prompt: "they're trying to make someone upset", type: "reason", complexity: 1, emotion: null},
    { prompt: "it will help them get ahead", type: "reason", complexity: 1, emotion: null},
    { prompt: "- just started!", type: "duration", complexity: null, emotion: null},
    { prompt: "thirty seconds", type: "duration", complexity: null, emotion: null},
    { prompt: "one minute", type: "duration", complexity: null, emotion: null},
    { prompt: "two minutes", type: "duration", complexity: null, emotion: null},
    { prompt: "three miinutes", type: "duration", complexity: null, emotion: null},
    { prompt: "five minutes", type: "duration", complexity: null, emotion: null},
    { prompt: "ten minutes", type: "duration", complexity: null, emotion: null},
    { prompt: "fifteen minutes", type: "duration", complexity: null, emotion: null},
    { prompt: "twenty minutes", type: "duration", complexity: null, emotion: null},
    { prompt: "half an hour", type: "duration", complexity: null, emotion: null},
    { prompt: "forty-five minutes", type: "duration", complexity: null, emotion: null},
    { prompt: "an hour", type: "duration", complexity: null, emotion: null},
    { prompt: "an hour and a half", type: "duration", complexity: null, emotion: null},
    { prompt: "two hours", type: "duration", complexity: null, emotion: null},
    { prompt: "three hours", type: "duration", complexity: null, emotion: null},
    { prompt: "six hours", type: "duration", complexity: null, emotion: null},
    { prompt: "half a day", type: "duration", complexity: null, emotion: null},
    { prompt: "a whole day", type: "duration", complexity: null, emotion: null},
    { prompt: "two days", type: "duration", complexity: null, emotion: null},
    { prompt: "three days", type: "duration", complexity: null, emotion: null},
    { prompt: "half a week", type: "duration", complexity: null, emotion: null},
    { prompt: "five days", type: "duration", complexity: null, emotion: null},
    { prompt: "a whole week", type: "duration", complexity: null, emotion: null},
    { prompt: "two weeks", type: "duration", complexity: null, emotion: null},
    { prompt: "three weeks", type: "duration", complexity: null, emotion: null},
    { prompt: "a whole month", type: "duration", complexity: null, emotion: null},
    { prompt: "two months", type: "duration", complexity: null, emotion: null},
    { prompt: "three months", type: "duration", complexity: null, emotion: null},
    { prompt: "half a year", type: "duration", complexity: null, emotion: null},
    { prompt: "a whole year", type: "duration", complexity: null, emotion: null},
    { prompt: "two years", type: "duration", complexity: null, emotion: null},
    { prompt: "three years", type: "duration", complexity: null, emotion: null},
    { prompt: "five years", type: "duration", complexity: null, emotion: null},
    { prompt: "a decade", type: "duration", complexity: null, emotion: null},
    { prompt: "two decades", type: "duration", complexity: null, emotion: null},
    { prompt: "their whole life", type: "duration", complexity: null, emotion: null}
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function inspirize() {

    function getPrompt() {
        let bolDialogue = document.getElementById("chkQuote").checked;
        let drpEmotion = document.getElementById("drpEmotion").value;
        let bolAction = document.getElementById("chkAction").checked;
        let bolColor = document.getElementById("chkColor").checked;
        let bolTrait = document.getElementById("chkTrait").checked;
        let bolTheme = document.getElementById("chkTheme").checked;
        let bolCompany = document.getElementById("chkCompany").checked;
        let bolReason = document.getElementById("chkReason").checked;
        let bolDuration = document.getElementById("chkDuration").checked;
        let lstChecked = [bolDialogue, bolAction, bolColor, bolTrait, bolTheme, bolCompany, bolReason, bolDuration]
        let lstQuotes = []
        lstQuotes.length = 0;

        let initialCheck = true;
        for (i of lstChecked) {
            if (!i) { initialCheck = false; break; }
        }

        if (!initialCheck || bolDialogue) {
            let outQuote = document.getElementById("dialogue");
            if (drpEmotion == "any" || drpEmotion == "") {
                for (i of lstPrompts) {
                    if (i.type == "quote") { lstQuotes.push(i); }
                }
            }
            else {
                    switch (drpEmotion) {
                        case "general":
                            for (i of lstPrompts) {
                                if (i.type == "quote" && i.emotion == "general") { lstQuotes.push(i) }
                            }
                            break;
                        case "happy":
                            for (i of lstPrompts) {
                                if (i.type == "quote" && i.emotion == "happy") { lstQuotes.push(i) }
                            }
                            break;
                        case "sad":
                            for (i of lstPrompts) {
                                if (i.type == "quote" && i.emotion == "sad") { lstQuotes.push(i) }
                            }
                            break;
                        case "angry":
                            for (i of lstPrompts) {
                                if (i.type == "quote" && i.emotion == "angry") { lstQuotes.push(i) }
                            }
                            break;
                        case "affectionate":
                            for (i of lstPrompts) {
                                if (i.type == "quote" && i.emotion == "affectionate") { lstQuotes.push(i) }
                            }
                            break;
                        case "scared":
                            for (i of lstPrompts) {
                                if (i.type == "quote" && i.emotion == "scared") { lstQuotes.push(i) }
                            }
                            break;
                        case "silly":
                            for (i of lstPrompts) {
                                if (i.type == "quote" && i.emotion == "silly") { lstQuotes.push(i) }
                            }
                            break;
                        case "miscellaneous":
                            for (i of lstPrompts) {
                                if (i.type == "quote" && i.emotion == "miscellaneous") { lstQuotes.push(i) }
                            }
                            break;
                            }
            }
            
            rndQuote = lstQuotes.length;
            genQuote = getRandomInt(rndQuote);
            outQuote.innerHTML = lstQuotes[genQuote].prompt;
        }
        if (bolColor) {
            let outColor = document.getElementById("color");
            let lstColors = []
            lstColors.length = 0;

            for (i of lstPrompts) {
                    if (i.type == "color") { lstColors.push(i); }
            }

            rndColor = lstColors.length;
            genColor = getRandomInt(rndColor);
            outColor.innerHTML = lstColors[genColor].prompt;
        }
        if (bolCompany) {
            let outCompany = document.getElementById("who");
            let lstCompany = []
            lstCompany.length = 0;

            for (i of lstPrompts) {
                    if (i.type == "company") { lstCompany.push(i); }
            }

            rndCompany = lstCompany.length;
            genCompany = getRandomInt(rndCompany);
            outCompany.innerHTML = lstCompany[genCompany].prompt;
        }
        if (bolDuration) {
            let outDuration = document.getElementById("time");
            let lstDuration = []
            lstDuration.length = 0;

            for (i of lstPrompts) {
                    if (i.type == "duration") { lstDuration.push(i); }
            }

            rndDuration = lstDuration.length;
            genDuration = getRandomInt(rndDuration);
            outDuration.innerHTML = lstDuration[genDuration].prompt;
        }
        if (bolAction) {
            let outAction = document.getElementById("action");
            let lstAction = []
            lstAction.length = 0;

            for (i of lstPrompts) {
                    if (i.type == "action") { lstAction.push(i); }
            }

            rndAction = lstAction.length;
            genAction = getRandomInt(rndAction);
            outAction.innerHTML = lstAction[genAction].prompt;
        }
        if (bolTrait) {
            let outTrait = document.getElementById("trait");
            let lstTrait = []
            lstTrait.length = 0;

            for (i of lstPrompts) {
                    if (i.type == "trait") { lstTrait.push(i); }
            }

            rndTrait = lstTrait.length;
            genTrait = getRandomInt(rndTrait);
            outTrait.innerHTML = lstTrait[genTrait].prompt;
        }
        if (bolTheme) {
            let outTheme = document.getElementById("theme");
            let lstTheme = []
            lstTheme.length = 0;

            for (i of lstPrompts) {
                    if (i.type == "theme") { lstTheme.push(i); }
            }

            rndTheme = lstTheme.length;
            genTheme = getRandomInt(rndTheme);
            outTheme.innerHTML = lstTheme[genTheme].prompt;
        }
        if (bolReason) {
            let outReason = document.getElementById("why");
            let lstReason = []
            lstReason.length = 0;

            for (i of lstPrompts) {
                    if (i.type == "reason") { lstReason.push(i); }
            }

            rndReason = lstReason.length;
            genReason = getRandomInt(rndReason);
            outReason.innerHTML = lstReason[genReason].prompt;
        }

    }

    function enableAbstract() {
        let chkAbstract = document.getElementById("chkComplex");
        let lstAbstract = [document.getElementById("chkAction"), document.getElementById("chkTrait"), document.getElementById("chkTheme"), document.getElementById("chkReason")]
        
        if (chkAbstract.checked) {
            for (i of lstAbstract) {
                i.disabled = false;
            }
        }
        else {
            for (i of lstAbstract) {
                i.disabled = true;
                i.checked = false;
            }
        }
    }

    function rememberDarkMode() {
        let bolDarkMode = document.getElementById("darkmode").checked;

        if (bolDarkMode) { localStorage.setItem("DarkMode", "Dark"); }
        else { localStorage.setItem("DarkMode", "Light"); }
    }

    function setDarkMode() {
        if (localStorage.getItem("DarkMode") == "Dark") { document.getElementById("darkmode").checked = true; }
        else { document.getElementById("darkmode").checked = false; }
    }

    getPrompt();
    setDarkMode()

    document.getElementById("generate").addEventListener("click", getPrompt);
    document.getElementById("chkComplex").addEventListener("click", enableAbstract);
    document.getElementById("darkmode").addEventListener("click", rememberDarkMode);
}

inspirize();