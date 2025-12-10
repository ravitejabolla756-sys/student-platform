import React from 'react';
import { Card } from './ui/card';

const FloatingCard = ({ children, className, delay = 0, ...props }) => {
  return (
    <Card
      className={`floating-card ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Card>
  );
};

export default FloatingCard;