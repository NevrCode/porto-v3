"use client";

import {
  FlipFx,
  Card,
  Row,
  Column,
  Line,
  Icon,
  Flex,
  Text,
  Heading,
  Avatar,
  Tag,
  Media,
  Button,
  Badge,
  SmartLink,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  tag: { name: string; icon: string }[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  tag,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <FlipFx
      minHeight={24}
      aspectRatio={4 / 5}
      front={
        <Card radius="l-4" direction="column" border="neutral-alpha-medium">
          <Media
            aspectRatio="5 / 3"
            src={images[0] || ""}
            radius="l-4"
          />
          <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Row>

          {/* <Line background="neutral-alpha-medium" /> */}
        </Card>
      }
      back={
        <Card radius="l-4" direction="column" border="neutral-alpha-medium">
          <Column fillWidth gap="16" vertical="around" horizontal="between">
            <Column>
              <Row
                fillWidth
                paddingX="20"
                paddingY="8"
                gap="8"
                vertical="center"
              >
                <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                  {title}
                </Heading>
              </Row>
              {/* <Line background="neutral-alpha-medium" /> */}

              <Column fillWidth paddingX="20" paddingY="4" gap="8">
                {tag && tag.length > 0 && (
                  <Row wrap gap="8">
                    {tag.map((tag, tagIndex) => (
                      <Tag
                        key={`${title}-${tagIndex}`}
                        size="l"
                        prefixIcon={tag.icon}
                      >
                        {tag.name}
                      </Tag>
                    ))}
                  </Row>
                )}
                <Text
                  onBackground="neutral-weak"
                  paddingTop="12"
                  variant="body-default-s"
                >
                  {description}
                </Text>
              </Column>
            </Column>
            <Row gap="12" wrap paddingX="20" paddingY="12">
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Row>
          </Column>
        </Card>
      }
    />
  );
};
