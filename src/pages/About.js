import React from "react";
import Menu from "../components/Menu";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row firstrow">
          <div className="col-md-12">
            <h1>About Codenames</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="content"><h2>Setup</h2>
               Players split up into two teams of similar size and skill.
              You need at least four players (two teams of two) for a standard
              game. Each team chooses one player to be their spymaster. Both
              spymasters sit on the same side of the table. The other players
              sit across from their spymasters. They are field operatives.
              Randomly choose 25 codenames and place them on the table in a
              5-by-5 grid. Note: While shuffling the codename cards, be sure to
              flip over half the deck once in a while. This will mix the words
              more thoroughly.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="content">
              <h2>The key</h2> Each game has one key that reveals the secret identities
              of the cards on the table. The spymasters should choose the key
              card randomly and slide it into the stand between them. Any side
              can be up. Don't think about it. Just slide it into the stand. And
              don't let the field operatives see it. The key corresponds to the
              grid on the table. Blue squares correspond to words that Blue Team
              must guess (blue agents). Red squares correspond to words that Red
              Team must guess (red agents). Pale squares are innocent
              bystanders, and the black square is an assassin who should never
              be contacted at all.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="content">
              <h2>Game Play</h2>
              <div className="row">
                <div className="col">Teams take turns. The starting team is indicated by the 4 lights on the edges of the key card.

Giving a clue
If you are the spymaster, you are trying to think of a one-word clue that relates to some of the words your team is trying to guess. When you think you have a good clue, you say it. You also say one number, which tells your teammates how many codenames are related to your clue.

Example: Two of your words are NUT and BARK. Both of these grow on trees, so you say tree: 2.

You are allowed to give a clue for only one word (cashew: 1 ) but it's fun to try for two or more. Getting four words with one clue is a big accomplishment.
One Word
Your clue must be only one word. You are not allowed to give extra hints. For example, don't say, "This may be a bit of a stretch…" You are playing Codenames. It's always a bit of a stretch.

Your clue cannot be any of the codenames visible on the table. On later turns, some codenames will be covered up, so a clue that is not legal now might be legal later.

Making contact
When the spymaster gives a clue, his or her field operatives try to figure out what it means. They can debate it amongst themselves, but the spymaster must keep a straight face.

The operatives indicate their official guess when one of them touches one of the codenames on the table.
If the field operative touches a card belonging to his or her team, the spymaster covers the word with an agent card in that color. The team may guess another word.

If the field operative touches an innocent bystander, the spymaster covers it with an innocent bystander card. This ends the turn.

If the field operative touches a card belonging to the other team, the word is covered by one of the other team's agent cards. This ends the turn. (And it helps the other team).
</div>
                <div className="col">If the field operative touches the assassin, the word is covered by the assassin card. This ends the game! The team that contacted the assassin loses.

Tip: Before saying your clue out loud, make sure it doesn't relate to the assassin.

Number of Guesses

The field operatives must always make at least one guess. Any wrong guess ends the turn immediately, but if the field operatives guess a word of their team's color, they can keep guessing.

You can stop guessing at any time, but usually you want to guess as many words as the spymaster said. Sometimes you might even want to guess one more:

Example: Red Team's first clue was tree: 2. The red operative wanted to guess ORANGE and NUT.

She guessed ORANGE first. That was an innocent bystander, so she did not get a chance to guess NUT.
Blue Team took a turn and correctly guessed two words. Now it is Red Team's turn again.

The red spymaster says river: 3. The red operative is pretty sure the AMAZON is a river, so she touches that card. The spymaster covers it with a red agent card, so she gets to go again. A river has a BED, so she touches that codename. It's also red, so she can go again.

She's not sure of the third river word. She picks NUT. This has nothing to do with river. She is guessing a word from the previous clue.

NUT is a red word. The operative has made 3 correct guesses for the clue river: 3. She is allowed one final guess. She can try to find the third river word, or she can try to find the other tree word. Or she can stop at three and let Blue Team have a turn.

You are allowed only one extra guess. In the example above, the red operative would be allowed 4 guesses because her spymaster said the number 3. When the field operatives say they are done guessing (or when they guess wrong) it is the other team's turn.</div>
              </div>
            




            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="content">
              Est laboris sint cupidatat ullamco magna adipisicing aliquip
              ullamco magna incididunt qui. Fugiat sit mollit in ad labore sit
              laborum et ut fugiat nostrud veniam pariatur. Velit ad culpa magna
              irure consectetur consequat elit aliquip mollit minim eiusmod
              reprehenderit sunt tempor. Ullamco anim dolor sit non
              reprehenderit ut excepteur velit proident culpa veniam ut
              incididunt commodo. Laborum adipisicing non Lorem esse in id aute
              elit.Aute commodo nostrud do duis qui velit labore magna sit
              consectetur laboris eiusmod. Mollit esse ut eiusmod amet esse anim
              mollit mollit tempor id et aliquip. Ullamco ut cillum ut
              consequat. Nisi ut laborum esse duis proident tempor Lorem esse
              ex. Deserunt magna nostrud velit dolor cillum esse et. Cupidatat
              excepteur esse ullamco fugiat quis.Est laboris sint cupidatat
              ullamco magna adipisicing aliquip ullamco magna incididunt qui.
              Fugiat sit mollit in ad labore sit laborum et ut fugiat nostrud
              veniam pariatur. Velit ad culpa magna irure consectetur consequat
              elit aliquip mollit minim eiusmod reprehenderit sunt tempor.
              Ullamco anim dolor sit non reprehenderit ut excepteur velit
              proident culpa veniam ut incididunt commodo. Laborum adipisicing
              non Lorem esse in id aute elit.Aute commodo nostrud do duis qui
              velit labore magna sit consectetur laboris eiusmod. Mollit esse ut
              eiusmod amet esse anim mollit mollit tempor id et aliquip. Ullamco
              ut cillum ut consequat. Nisi ut laborum esse duis proident tempor
              Lorem esse ex. Deserunt magna nostrud velit dolor cillum esse et.
              Cupidatat excepteur esse ullamco fugiat quis.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="content">
              Est laboris sint cupidatat ullamco magna adipisicing aliquip
              ullamco magna incididunt qui. Fugiat sit mollit in ad labore sit
              laborum et ut fugiat nostrud veniam pariatur. Velit ad culpa magna
              irure consectetur consequat elit aliquip mollit minim eiusmod
              reprehenderit sunt tempor. Ullamco anim dolor sit non
              reprehenderit ut excepteur velit proident culpa veniam ut
              incididunt commodo. Laborum adipisicing non Lorem esse in id aute
              elit.Aute commodo nostrud do duis qui velit labore magna sit
              consectetur laboris eiusmod. Mollit esse ut eiusmod amet esse anim
              mollit mollit tempor id et aliquip. Ullamco ut cillum ut
              consequat. Nisi ut laborum esse duis proident tempor Lorem esse
              ex. Deserunt magna nostrud velit dolor cillum esse et. Cupidatat
              excepteur esse ullamco fugiat quis.Est laboris sint cupidatat
              ullamco magna adipisicing aliquip ullamco magna incididunt qui.
              Fugiat sit mollit in ad labore sit laborum et ut fugiat nostrud
              veniam pariatur. Velit ad culpa magna irure consectetur consequat
              elit aliquip mollit minim eiusmod reprehenderit sunt tempor.
              Ullamco anim dolor sit non reprehenderit ut excepteur velit
              proident culpa veniam ut incididunt commodo. Laborum adipisicing
              non Lorem esse in id aute elit.Aute commodo nostrud do duis qui
              velit labore magna sit consectetur laboris eiusmod. Mollit esse ut
              eiusmod amet esse anim mollit mollit tempor id et aliquip. Ullamco
              ut cillum ut consequat. Nisi ut laborum esse duis proident tempor
              Lorem esse ex. Deserunt magna nostrud velit dolor cillum esse et.
              Cupidatat excepteur esse ullamco fugiat quis.
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default About;
