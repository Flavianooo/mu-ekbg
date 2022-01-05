/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Partner from 'assets/partner.png';

const data = {
  subTitle: 'Ürünlerimiz',
  title: 'Engellere karşı her zaman yanınızda...',
  description:
    'Şerit takip sistemi, yön bulma ve birçok özelliği içinde barındıran sistemimiz ile gelişmiş bir sürücü desteği özelliğini sizlere sağlıyoruz.\
    \ Çok amaçlı yazılımımızın otomobil sistemlerine entegre edilmiş olan bu projesi, güçlü sensörler yardımıyla şeritleri ve cisimleri algılayarak aracın hem şerit içerisinde kalması hem de olası engel durumlarında (Hayvan belirmesi, hatalı sollama…) direksiyona titreşim ve araca sesli uyarı sinyali göndererek sürücüleri uyarmayı hedefliyor. Bu sayede uzun yolda ve günlük hayatta az riskli güvenli sürüş sizleri bekliyor.',
  btnName: 'Detaylı Bilgi - Mail Gönderin',
  btnURL: 'mailto://efetacirlioglu@gmail.com',
};

export default function PartnerSection() {
  return (
    <section sx={{ variant: 'section.partner' }} id="partner">
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
          <Image src="https://cdn.discordapp.com/attachments/739293353933406308/928373150385860659/WhatsApp_Image_2022-01-05_at_21.27.21.jpeg" alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
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
