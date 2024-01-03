import React from 'react';
import type { FC, ReactElement } from 'react';
import { View } from 'react-native';
interface SplitScreenProps {
  children: ReactElement[] | ReactElement;
  weigths?: number[];
  row?: boolean;
  styleChildren?: string;
  styleParent?: string;
  centered?: boolean;
}

// https://juliastjerna.vercel.app/posts/typed-reusable-layout-components

const SplitScreen: FC<SplitScreenProps> = ({
  children,
  weigths = [],
  row = false,
  styleChildren = '',
  styleParent = '',
  centered = true,
}) => {
  let w: number[];
  // If no weigths are provided, w (weights) will default to 1 per element
  if (Array.isArray(children)) {
    w = weigths?.length > 0 ? weigths : children.map(() => 1);
  }
  return (
    <View className={`flex flex-${row ? 'row' : 'col'}  h-full w-full ${styleParent} absolute`}>
      {Array.isArray(children) ? (
        children.map((component, idx) => {
          const flex = w[idx];
          return (
            <View
              className={`${
                centered && 'justify-center items-center'
              } w-full h-full ${styleChildren}`}
              key={`splitscreen-pane-${idx}-${component.key}`}
              style={{ flex }}
            >
              {component}
            </View>
          );
        })
      ) : (
        <View
          className={`h-full w-full ${centered && 'justify-center items-center'} ${styleChildren} `}
          style={{ flex: weigths[0] }}
        >
          {children}
        </View>
      )}
    </View>
  );
};

export default SplitScreen;
