import { Accordion } from "@mantine/core";
import { faqNew } from "../../../lib/constants/faq";

export default function FrequentQuestions(){
    const items = faqNew.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control icon={item.icon}>{item.value}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ));
    
      return (
        <Accordion variant="separated" radius="lg">
          {items}
        </Accordion>
      );
}