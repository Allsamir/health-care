import Button from "./Button";

const Question = () => {
  return (
    <div className="">
      <Button text="Faq" />
      <h2 className="text-[2.25rem] leading-[3.375rem] font-semibold text-[#020043] mt-4 mb-7">
        Frequntly Asked Question
      </h2>
      <div className="flex flex-col gap-3">
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What are your office hours?
          </div>
          <div className="collapse-content">
            <div className="divider mt-0"></div>
            <p className="text-[0.875rem] leading-6">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content">
            <div className="divider mt-0"></div>
            <p className="text-[0.875rem] leading-6">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you accept insurance?
          </div>
          <div className="collapse-content">
            <div className="divider mt-0"></div>
            <p className="text-[0.875rem] leading-6">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What should I bring to my appointment?
          </div>
          <div className="collapse-content">
            <div className="divider mt-0"></div>
            <p className="text-[0.875rem] leading-6">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content">
            <div className="divider mt-0"></div>
            <p className="text-[0.875rem] leading-6">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
