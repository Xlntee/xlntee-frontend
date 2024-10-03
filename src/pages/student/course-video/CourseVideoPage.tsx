import { useState } from "react";
import { Box } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

import { Comments, Description, Tools, Video, ToolsTabEnum } from "./ui";

const CoursePage = ({ title }: PageProps) => {
  useTitle(title);

  const [tab, setTab] = useState<string>(ToolsTabEnum.Description);

  return (
    <Box pb="20px">
      <Video video="https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4" type="video/mp4" />
      <Box px="20px">
        <Tools onClickTab={(v) => setTab(v)} />
        {tab === ToolsTabEnum.Description && (
          <Description text="композиційно-стилістичний спосіб викладуматеріалу в художньому, передусім епічному творі, полягає  послідовному відтворенні логічних зв'язків між явищами, поняттями,  фіксуванні окремих ознак, рис, властивостей персонажів, зображуваних краєвидів, інтер'єрів, предметів тощо.поширений композиційно-стилістичний спосіб викладу матеріалупослідовному відтворенні логічних зв'язків між явищами, поняттями, фіксуванні окремих ознак, рис, властивостей персонажів, зображуваних краєвидів, інтер'єрів, предметів тощо" />
        )}
        {tab === ToolsTabEnum.Comments && (
          <Comments
            id="1"
            comments={[
              {
                user: {
                  id: "1",
                  nickname: "Yarikmama",
                  text: "Я також нічого не зрозумів, було добре отримати розгорнуту інформацію по другому модулю, на мій погляд - тема достатньо складна для розяснення за 5в.",
                  date: "2024-03-03T14:07:35.193Z",
                },
                comments: [
                  {
                    id: "2",
                    nickname: "Yarikmama",
                    text: "Я також нічого не зрозумів, було добре отримати розгорнуту інформацію по другому модулю, на мій погляд - тема достатньо складна для розяснення за 5в.",
                    date: "2024-09-03T14:07:35.193Z",
                  },
                ],
              },
            ]}
          />
        )}
      </Box>
    </Box>
  );
};

export default CoursePage;
