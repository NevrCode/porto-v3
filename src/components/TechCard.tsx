"use client";

import { Card, Column, Icon, Row, Text } from "@once-ui-system/core";


interface TechCardProps {
    title: string;
    icon: string;
}


export const TechCard: React.FC<TechCardProps> = ({ title, icon }) => {
    return (
        <Card margin={"8"} padding="32" horizontal="center" vertical="center"  radius="l-4" borderWidth="1" aspectRatio={3/2}>
            <Column horizontal="center" vertical="center" gap="16">

                <Icon name={icon} size="xl" />
            
                
            <Text className="text-sm">{title}</Text></Column>
        </Card>
    );
}