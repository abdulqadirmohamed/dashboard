import React from "react";
import { Tab } from "@headlessui/react";

const Table = () => {
  return (
    <div className="mt-2">
      <Tab.Group>
        <Tab.List className="bg-white flex gap-4 px-4 py-2">
          <Tab className={`hover:bg-blue`}>Skilled Employees</Tab>
          <Tab className={`hover:bg-blue`}>Certified Employees</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Table;
