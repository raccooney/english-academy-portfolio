import './EnglishAcademy.css'
import heroImage from './assets/academy-hero-optimized.jpg'

function EnglishAcademy() {

    const teachers = [
        {
            id: 1,
            name: '김민수',
            subject: '국어',
            description: '국어 강의수 1위!',
        },

        {
            id: 2,
            name: '이철수',
            subject: '수학',
            description: '수학 짱 잘함',
        },

        {
            id: 3,
            name: '박영희',
            subject: '사회',
            description: '엄청 사회적인 사람',
        },

        {
            id: 4,
            name: '홍길동',
            subject: '과학',
            description: '동에번쩍 서에번쩍은 과학적이지 않아요'
        }
    ]

    const reviews = [
        {
            id: 1,
            title: '교육과정이 맘에 들어요',
            name: '김학생',
            content: '체계적인 교육과정과 든든한 선생님들 덕에 성적이 많이 올랐습니다.',
            rating: 5,
        },

        {
            id: 2,
            title: '기초부터 탄탄',
            name: '이학생',
            content: '기초가 탄탄해지니 성적이 잘 오르는 것 같아요',
            rating: 5,
        },

        {
            id: 3,
            title: '민수쌤 좋아요',
            name: '박학생',
            content: '민수쌤 덕에 성적이 많이 올랐어요!',
            rating: 5,
        },
    ]

    return (
        <div>
            
            <header>
                <h1>DOYSCHOOL</h1>

                <nav>
                    <a href="#about">About</a>
                    <a href="#teachers">Teachers</a>
                    <a href="#curriculum">Curriculum</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            
            <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),
                                                                rgba(0, 0, 0, 0.4)),
                                                                url(${heroImage})`}}>
                <h2>LEVEL UP!</h2>
                <p>DOYSCHOOL에서 당신의 영어실력을 향상 시켜보세요!</p>
                <a href='#contact'>상담 신청</a>
            </section>

            <section id='about' className='about'>
                <div className='about-text'>
                    <h2>About DOYSCHOOL</h2>

                    <p>DOYSCHOOL은 학생의 현재 수준과 학습 목표에 맞춘 
                        체계적인 영어 교육을 제공합니다.</p>
                    
                    <p>기초부터 실전까지 단계별 커리큘럼을 통해 영어에 
                        대한 자신감을 키우고, 스스로 성장할 수 있는 학습
                         습관을 만들어갑니다.</p>

                </div>
            </section>

            <section id='teachers' className='teachers'>
                <h2>Teachers</h2>

                <div className='teacher-list'>
                    
                    {teachers.map((teacher) => (
                        <div className='teacher-card' key={teacher.id}>
                            <h3>{teacher.name}</h3>
                            <p>과목: {teacher.subject}</p>
                            <p>{teacher.description}</p>
                        </div>
                    ))}

                </div>

            </section>

            <section id='curriculum' className='curriculum'>
                <h2>Curriculum</h2>
                
                <div className='curriculum-list'>
                    <div className='curriculum-card'>
                        <h3>Elementary</h3>
                        <p>기초 문법과 어휘를 탄탄하게 다지기</p>
                    </div>
                    <div className='curriculum-card'>
                        <h3>Middle School</h3>
                        <p>내신과 독해 실력을 향상</p>
                    </div>
                    <div className='curriculum-card'>
                        <h3>High School</h3>
                        <p>수능과 심화 독해를 집중적으로 준비</p>
                    </div>
                </div>
            </section>

            <section id='reviews' className='reviews'>
                <h2>Reviews</h2>

                <div className='review-list'>
                    {reviews.map((review) => (
                        <div className='review-card' key={review.id}>
                            <div className='review-stars'>
                                {'*'.repeat(review.rating)}
                            </div>

                            <h3>{review.title}</h3>

                            <p className='review-content'>
                                "{review.content}"
                            </p>

                            <p className='review-name'>
                                - {review.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section id='contact' className='contact'>
                <h2>Contact</h2>
                <p> 상담 문의</p>
                <p><a href='tel:010-0000-0000'>010-0000-0000</a></p>
                <p><a href='mailto:doyschool@doy.kr'>doyschool@doy.kr</a></p>
                <button>상담신청</button>
            </section>

            <footer>
                <p>© 2026 DOYSCHOOL. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default EnglishAcademy