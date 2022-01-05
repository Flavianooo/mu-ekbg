/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Partner from 'assets/partner.png';

const data = {
  subTitle: 'Bir Başka Ürünümüz',
  title: 'Engelleri aşmaya devam ediyoruz...',
  description:
    'Yazılımımızın bir başka entegre edilmiş sistemi olan akıllı baston sistemi sayesinde görme engelli insanların günlük hayat konforunu en üst seviyeye getirmeyi amaçlıyoruz. Akıllı bastonlardaki sensörler kullanıcının baş ve ayak ucuna kadar kapsayan 2 metre çaplı bir kapsam alanı oluşturarak kullanıcının eliyle tuttuğu kısma titreşim sinyalleri göndererek kullanıcıyı olası bir kaza riskinden koruyor.',
  btnName: 'Detaylı Bilgi - Mail Gönderin',
  btnURL: 'mailto://efetacirlioglu@gmail.com',
};

export default function PartnerSectionTwo() {
  return (
    <section sx={{ variant: 'section.partner' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
          <Image src="https://cdn.discordapp.com/attachments/739293353933406308/928385187245592616/foto.png" alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
