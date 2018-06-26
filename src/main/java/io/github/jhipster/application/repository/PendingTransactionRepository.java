package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.PendingTransaction;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the PendingTransaction entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PendingTransactionRepository extends JpaRepository<PendingTransaction, Long> {

}
