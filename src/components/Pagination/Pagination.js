// @flow
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
};

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}: Props) => (
    <div className={styles['pagination']}>
      {hasPrevPage && (
        <div className={styles['pagination__prev']}>
          <Link rel="prev" to={prevPagePath} className={styles['pagination__prev-link']}>{PAGINATION.PREV_PAGE}</Link>
        </div>
      )}
      {hasNextPage && (
        <div className={styles['pagination__next']}>
          <Link rel="next" to={nextPagePath} className={styles['pagination__next-link']}>{PAGINATION.NEXT_PAGE}</Link>
        </div>
      )}
    </div>
  );

export default Pagination;
