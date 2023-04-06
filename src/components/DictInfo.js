import { Howl } from "howler";
import SpeakerIcon from "./img/speaker_4xjhrgiex55n.svg";
import NoWordInfo from "./NoWordInfo";
function DictInfo({ wordArray }) {
  const emptyString = "";

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    if (src === emptyString) {
      return;
    } else {
      console.log(src);
      sound.play();
      // setMySrc("");
    }
  };

  console.log(wordArray);

  return (
    <div>
      <div className=" flex flex-col ">
        {Array.isArray(wordArray) ? (
          wordArray.map((word, index1) => {
            return (
              <div
                key={index1}
                className="flex flex-col border-b-2 border-gray-500 md:mx-48 "
                id="defs"
              >
                <div className="mx-5 my-5 space-y-4">
                  <h1 className="text-2xl font-semibold capitalize">
                    Word :<span className="text-lg"> {word.word}</span>
                  </h1>
                  <h1 className=" flex">
                    Pronunciation : {"  "}
                    {word.phonetics.map((phonetics, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center ml-3  w-fit "
                        >
                          {phonetics.audio ? (
                            <div className="flex " key={index}>
                              {phonetics.text}

                              <img
                                className="w-6 ml-2"
                                src={SpeakerIcon}
                                alt="speaker icon"
                                onClick={() => soundPlay(phonetics.audio)}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </h1>
                </div>
                <div className=" flex md:flex-row justify-between md:space-x-5  overflow-scroll px-3 md:justify-start flex-col   pb-5 ">
                  {word.meanings.map((meanings, index) => {
                    return (
                      <div
                        key={index}
                        id="defCard"
                        className=" rounded-lg   md:h-72 flex flex-col mb-5  md:min-w-full"
                      >
                        <h1
                          id="partOfSpeech"
                          className="text-xl  text-center  p-3  uppercase"
                        >
                          ({index1 + 1}.) {meanings.partOfSpeech}
                        </h1>
                        <div
                          id="definitions"
                          className="pt-4   overflow-scroll ;"
                        >
                          {meanings.definitions.map((definitions, indexDef) => {
                            return (
                              <div key={indexDef}>
                                <h1 className="pb-2">
                                  {indexDef + 1}. Definition :
                                  {definitions.definition}
                                  <span>{definitions.example}</span>
                                </h1>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <NoWordInfo wordArray={wordArray} />
        )}
        {}
      </div>
    </div>
  );
}

export default DictInfo;
