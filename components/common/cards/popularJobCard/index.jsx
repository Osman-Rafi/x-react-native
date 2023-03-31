import { Image, TouchableOpacity, Text, View } from "react-native";

import styles from "./popularJobCard";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item?.employer_logo
              : "https://placehold.co/60x60",
          }}
          resize="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
