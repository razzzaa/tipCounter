import { useEffect, useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";
import CombinedResult from "./CombinedResult";
import Buttons from "./Buttons";
import Header from "./header";

export default function Selects() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState([]);
  const [globalOpen, setGlobalOpen] = useState(false);

  console.log(tip);

  const tipSum = tip.reduce((acc, tip) => acc + tip.percent, 0);

  const finalTip = Number((bill * (tipSum / tip.length / 100)).toFixed(2));

  function firstSelect() {
    return setTip([
      { id: Math.floor(Math.random() * 1000000), percent: 0, isOpen: false },
    ]);
  }

  function handleReset() {
    setBill("");
    setTip([]);
    firstSelect();
    setGlobalOpen(false);
  }

  function handlePercentages(e, index) {
    setTip([
      ...tip.slice(0, index),
      { ...tip[index], percent: e },
      ...tip.slice(index + 1),
    ]);
  }

  function handleRemove(id) {
    setTip(tip.slice().filter((removed) => removed.id !== id));
  }

  useEffect(() => {
    firstSelect();
  }, []);

  return (
    <div className="mainTips">
      <Header globalOpen={globalOpen} />
      <CombinedResult globalOpen={globalOpen} finalTip={finalTip} bill={bill} />
      <Bill globalOpen={globalOpen} bill={bill} setBill={setBill} />
      {tip.map((tips, index) => (
        <>
          {console.log(tips.percent)}
          <Tip
            tip={tip}
            percentage={tips.percent}
            id={tips.id}
            index={index}
            onSelect={handlePercentages}
            setTip={setTip}
            isOpen={tips.isOpen}
            setGlobalOpen={setGlobalOpen}
            globalOpen={globalOpen}
            handleRemove={handleRemove}
          >
            {index === 0
              ? "How did you like the service?"
              : "How did your friend like the service?"}
          </Tip>
        </>
      ))}
      <Buttons
        handleReset={handleReset}
        tip={tip}
        setTip={setTip}
        setBill={setBill}
        globalOpen={globalOpen}
      />
    </div>
  );
}
