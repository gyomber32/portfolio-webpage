import { PreferredTechnologies, Timeline } from "@/components";
import React, { ReactElement } from "react";

const SkillsPage = (): ReactElement => {
  return (
    <div>
      <PreferredTechnologies />
      <Timeline data={[]}></Timeline>
    </div>
  );
};

export default SkillsPage;
