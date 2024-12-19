interface ClassProps {
  params: {
    classId: string;
  };
}

const Class = ({ params: { classId } }: ClassProps) => {
  return <div>{classId}</div>;
};

export default Class;
