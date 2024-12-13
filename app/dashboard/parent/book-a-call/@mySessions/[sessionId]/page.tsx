interface SessionDetailsProps {
  params: {
    sessionId: string;
  };
}

const SessionDetails = ({ params: { sessionId } }: SessionDetailsProps) => {
  // Details are going to be based on what data is sent and recieved
  return <div>Session {sessionId} Details</div>;
};

export default SessionDetails;
