import React, { FC } from "react";

interface UserImageUpload {
  image: string;
  onChange: (file: FileList | File, fileBlob?: string) => void;
}

function withUserImageUpload<P extends object = UserImageUpload>(WrappedComponent: React.ComponentType<P>): FC<P> {
  const Component: FC<P> = (props: P) => {
    function onChange(): void {
      console.log("upload image");
    }

    return <WrappedComponent {...props} onChange={onChange} />;
  };

  Component.displayName = "UserImageUpload";

  return Component;
}

export default withUserImageUpload;
