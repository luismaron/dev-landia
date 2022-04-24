import React from "react";
import { StyleSheet, View } from "react-native";
import Markdown, { ASTNode } from "react-native-markdown-display";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Header } from "./Header";
import theme from "../../../Global/styles/theme";
import { markdownText } from "./class1";
import { Bash } from "../../../components/Bash";

import {
  FinishButton,
  TextButton,
  ContainerScrollView,
  Content,
} from "./styles";

const rules = {
  fence: (node: ASTNode) => {
    return node.markup !== "~~~" ? (
      <SyntaxHighlighter
        key={node.key}
        language="javascript"
        style={dracula}
        highlighter="prism"
      >
        {node.content}
      </SyntaxHighlighter>
    ) : (
      <Bash key={node.key} text={node.content} />
    );
  },
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 32,
    fontFamily: theme.fonts.bold,
    textAlign: "justify",
  },
  heading2: {
    fontSize: 24,
    lineHeight: 40,
    fontFamily: theme.fonts.bold,
    marginTop: 16,
    textAlign: "justify",
  },
  heading3: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: theme.fonts.bold,
    marginTop: 16,
    textAlign: "justify",
  },
  body: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: theme.fonts.regular,
    textAlign: "justify",
  },
});

interface TeorychActivityProps {
  title: string;
  markdown_text: string;
}

export function Theoretical({
  title,
  markdown_text,
}: TeorychActivityProps): JSX.Element {
  function handleFinishClass(): void {
    console.log("🎉 Aula Finalizada!");
  }

  return (
    <ContainerScrollView>
      <Header title={title} />
      <Content>
        <Markdown rules={rules} style={styles}>
          {markdown_text}
        </Markdown>

        <FinishButton onPress={handleFinishClass} activeOpacity={0.7}>
          <TextButton>FINALIZAR</TextButton>
        </FinishButton>
      </Content>
    </ContainerScrollView>
  );
}