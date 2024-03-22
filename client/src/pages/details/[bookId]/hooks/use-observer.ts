import { useEffect } from "react";

import { DetailsIndexIds } from "..";

type UseObserverProps = {
  prodInfoRef: React.MutableRefObject<null>;
  reviewRef: React.MutableRefObject<null>;
  setIsInView: React.Dispatch<React.SetStateAction<DetailsIndexIds | null>>;
};

export const useObserver = ({
  prodInfoRef,
  reviewRef,
  setIsInView,
}: UseObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            const newInView = entry.target.id as DetailsIndexIds;
            setIsInView((currentInView) =>
              currentInView !== newInView ? newInView : currentInView
            );
          }
        });
      },
      {
        threshold: [0, 0.5, 1.0],
      }
    );

    if (prodInfoRef.current) {
      observer.observe(prodInfoRef.current);
    }

    if (reviewRef.current) {
      observer.observe(reviewRef.current);
    }

    return () => {
      if (prodInfoRef.current) {
        observer.unobserve(prodInfoRef.current);
      }

      if (reviewRef.current) {
        observer.unobserve(reviewRef.current);
      }
    };
  }, []);
};
