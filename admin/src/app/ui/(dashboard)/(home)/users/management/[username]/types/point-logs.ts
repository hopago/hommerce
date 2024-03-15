type PointData = {
  pointLogs: PointLogs;
  pagination: {
    totalPages: number;
    totalPoints: number;
  };
};

type PointLog = {
  _id: string;
  userId: string;
  pointId: string;
  desc: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

type PointLogs = PointLog[];
