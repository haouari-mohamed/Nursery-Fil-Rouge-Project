package com.example.nurseryFilrouge;

import com.example.nurseryFilrouge.model.*;
import com.example.nurseryFilrouge.model.enums.ReservationStatus;
import com.example.nurseryFilrouge.model.enums.UserType;
import com.example.nurseryFilrouge.repository.*;
import com.example.nurseryFilrouge.service.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.*;


class GlobalTest{


    @Nested
    class AdministrationServiceTest {
	@Mock
	private AdministrationRepository administrationRepository;
	@Mock
	private CrecheRepository crecheRepository;
	@Mock
	private UserRepository userRepository;
	@InjectMocks
	private AdministrationService administrationService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testRegisterAdministration() {
		Administration administration = new Administration();
		when(administrationRepository.save(administration)).thenReturn(administration);
		Administration result = administrationService.registerAdministration(administration);
		assertEquals(administration, result);
		verify(administrationRepository, times(1)).save(administration);
	}

	@Test
	void testGererCreches() {
		Creche nouvelleCreche = new Creche();
		administrationService.gererCreches(nouvelleCreche);
		verify(crecheRepository, times(1)).save(nouvelleCreche);
	}
}

    @Nested
    class AvisServiceTest {
	@Mock
	private AvisRepository avisRepository;
	@InjectMocks
	private AvisService avisService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testLaisserAvis() {
		Avis avis = new Avis();
		when(avisRepository.save(avis)).thenReturn(avis);
		Avis result = avisService.laisserAvis(avis);
		assertEquals(avis, result);
		verify(avisRepository, times(1)).save(avis);
	}

	@Test
	void testGetAvisForCreche() {
		Long crecheId = 1L;
		when(avisRepository.findByCrecheId(crecheId)).thenReturn(null);
		assertNull(avisService.getAvisForCreche(crecheId));
		verify(avisRepository, times(1)).findByCrecheId(crecheId);
	}
}

    @Nested
    class ChildServiceTest {
	@Mock
	private ChildRepository childRepository;
	@InjectMocks
	private ChildService childService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testRegisterChild() {
		Child child = new Child();
		when(childRepository.save(child)).thenReturn(child);
		Child result = childService.registerChild(child);
		assertEquals(child, result);
		verify(childRepository, times(1)).save(child);
	}

	@Test
	void testUpdateChild() {
		Long childId = 1L;
		Child child = new Child();
		Child updatedChild = new Child();
		when(childRepository.findById(childId)).thenReturn(Optional.of(child));
		when(childRepository.save(child)).thenReturn(child);
		childService.updateChild(childId, updatedChild);
		verify(childRepository, times(1)).findById(childId);
		verify(childRepository, times(1)).save(child);
	}
}

    @Nested
    class CrecheServiceTest {
	@Mock
	private CrecheRepository crecheRepository;
	@InjectMocks
	private CrecheService crecheService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testAddCreche() {
		Creche creche = new Creche();
		when(crecheRepository.save(creche)).thenReturn(creche);
		Creche result = crecheService.addCreche(creche);
		assertEquals(creche, result);
		verify(crecheRepository, times(1)).save(creche);
	}

	@Test
	void testSearchCreches() {
		String ville = "Paris";
		crecheService.searchCreches(ville);
		verify(crecheRepository, times(1)).findByVille(ville);
	}
}

    @Nested
    class EvenementServiceTest {
	@Mock
	private EvenementRepository evenementRepository;
	@InjectMocks
	private EvenementService evenementService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testSaveEvenement() {
		Evenement evenement = new Evenement();
		when(evenementRepository.save(evenement)).thenReturn(evenement);
		Evenement result = evenementService.saveEvenement(evenement);
		assertEquals(evenement, result);
		verify(evenementRepository, times(1)).save(evenement);
	}

	@Test
	void testGetEvenementsByDate() {
		Date date = new Date();
		evenementService.getEvenementsByDate(date);
		verify(evenementRepository, times(1)).findByDate(date);
	}
}

    @Nested
	class PanierServiceTest {
		@Mock
		private PanierRepository panierRepository;
		@Mock
		private ParentRepository parentRepository;
		@InjectMocks
		private PanierService panierService;

		@BeforeEach
		void setUp() {
			MockitoAnnotations.openMocks(this);
		}

		@Test
		void testCreatePanier() {
			Long parentId = 1L;
			Parent parent = new Parent();
			Panier panier = new Panier();
			panier.setParent(parent);

			when(parentRepository.findById(parentId)).thenReturn(Optional.of(parent));
			when(panierRepository.save(any(Panier.class))).thenReturn(panier);

			Panier result = panierService.createPanier(parentId);

			assertEquals(panier, result);
			verify(parentRepository, times(1)).findById(parentId);
			verify(panierRepository, times(1)).save(any(Panier.class));
		}

		
	}
}

    @Nested
    class ParentServiceTest {
	@Mock
	private ParentRepository parentRepository;
	@Mock
	private CrecheRepository crecheRepository;
	@Mock
	private ReservationRepository reservationRepository;
	@Mock
	private ChildRepository childRepository;
	@InjectMocks
	private ParentService parentService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testRechercherCreche() {
		String ville = "Paris";
		parentService.rechercherCreche(ville);
		verify(crecheRepository, times(1)).findByVille(ville);
	}

	@Test
	void testUpdateProfile() {
		Long parentId = 1L;
		Parent parent = new Parent();
		Parent updatedParent = new Parent();
		when(parentRepository.findById(parentId)).thenReturn(Optional.of(parent));
		when(parentRepository.save(parent)).thenReturn(parent);
		parentService.updateProfile(parentId, updatedParent);
		verify(parentRepository, times(1)).findById(parentId);
		verify(parentRepository, times(1)).save(parent);
	}
}

@Nested
class ReservationServiceTest {
	@Mock
	private ReservationRepository reservationRepository;
	@Mock
	private ParentRepository parentRepository;
	@Mock
	private CrecheRepository crecheRepository;
	@InjectMocks
	private ReservationService reservationService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testCreateReservation() {
		Long parentId = 1L;
		Long crecheId = 1L;
		Date dateDebut = new Date();
		Date dateFin = new Date();

		Parent parent = new Parent();
		Creche creche = new Creche();
		Reservation reservation = new Reservation();
		reservation.setParent(parent);
		reservation.setCreche(creche);
		reservation.setDateDebut(dateDebut);
		reservation.setDateFin(dateFin);
		reservation.setStatus(ReservationStatus.EN_ATTENTE);

		when(parentRepository.findById(parentId)).thenReturn(Optional.of(parent));
		when(crecheRepository.findById(crecheId)).thenReturn(Optional.of(creche));
		when(reservationRepository.save(any(Reservation.class))).thenReturn(reservation);

		Reservation result = reservationService.createReservation(parentId, crecheId, dateDebut, dateFin);

		assertEquals(reservation, result);
		verify(parentRepository, times(1)).findById(parentId);
		verify(crecheRepository, times(1)).findById(crecheId);
		verify(reservationRepository, times(1)).save(any(Reservation.class));
	}

	@Test
	void testConfirmReservation() {
		Long reservationId = 1L;
		Reservation reservation = new Reservation();
		reservation.setStatus(ReservationStatus.EN_ATTENTE);

		when(reservationRepository.findById(reservationId)).thenReturn(Optional.of(reservation));
		when(reservationRepository.save(any(Reservation.class))).thenReturn(reservation);

		reservationService.confirmReservation(reservationId);

		assertEquals(ReservationStatus.CONFIRMEE, reservation.getStatus());
		verify(reservationRepository, times(1)).findById(reservationId);
		verify(reservationRepository, times(1)).save(any(Reservation.class));
	}
}
    @Nested
    class SuperviseurServiceTest {
	@Mock
	private SuperviseurRepository superviseurRepository;
	@Mock
	private CrecheRepository crecheRepository;
	@InjectMocks
	private SuperviseurService superviseurService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testRegisterSuperviseur() {
		Superviseur superviseur = new Superviseur();
		when(superviseurRepository.save(superviseur)).thenReturn(superviseur);
		Superviseur result = superviseurService.registerSuperviseur(superviseur);
		assertEquals(superviseur, result);
		verify(superviseurRepository, times(1)).save(superviseur);
	}

	@Test
	void testGererInformations() {
		Long crecheId = 1L;
		Creche creche = new Creche();
		Creche updatedCreche = new Creche();
		when(crecheRepository.findById(crecheId)).thenReturn(Optional.of(creche));
		when(crecheRepository.save(creche)).thenReturn(creche);
		superviseurService.gererInformations(crecheId, updatedCreche);
		verify(crecheRepository, times(1)).findById(crecheId);
		verify(crecheRepository, times(1)).save(creche);
	}
}

    @Nested
    class UserServiceTest {
		@Mock
		private UserRepository userRepository;
		@Mock
		private PasswordEncoder encoder;
		@InjectMocks
		private UserService userService;

		@BeforeEach
		void setUp() {
			MockitoAnnotations.openMocks(this);
		}

		@Test
		void testAddUser() {
			User userInfo = new User();
			userInfo.setEmail("test@example.com");
			userInfo.setPassword("password");
			userInfo.setType(UserType.PARENT);

			when(encoder.encode(userInfo.getPassword())).thenReturn("encodedPassword");
			when(userRepository.save(any(User.class))).thenReturn(userInfo);

			String result = userService.addUser(userInfo);

			assertEquals("User Added Successfully", result);
			verify(encoder, times(1)).encode(userInfo.getPassword());
			verify(userRepository, times(1)).save(any(User.class));
		}
	}
